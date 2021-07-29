using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Hosting;
using Store.Business.Data;
using Store.Business.Manager;
using Newtonsoft.Json;
using Store.Business.Services;

namespace ServerStore
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<ProductsService, ProductsService>();
            services.AddScoped<CartService, CartService>();
            services.AddScoped<ProductsManager, ProductsManager>();
            services.AddScoped<OrderService, OrderService>();
            services.AddControllers();
            services.AddMvc().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddDbContext<ServerStoreContext>(options =>
                    options.UseLazyLoadingProxies().UseSqlServer(
                     Configuration.GetConnectionString("ServerStoreContext"),
                     x => x.MigrationsAssembly("Store.Migrations")));
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:3000");
                    });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            app.UseStatusCodePages();
            app.UseRouting();
            app.UseCors(builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            );

            app.UseDefaultFiles();

            DefaultFilesOptions defaultFileOptions = new DefaultFilesOptions();
            defaultFileOptions.DefaultFileNames.Clear();
            defaultFileOptions.DefaultFileNames.Add("/index.html");

            app.UseDefaultFiles(defaultFileOptions);
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                Path.Combine(env.ContentRootPath, "wwwroot")),
                RequestPath = "/StaticFiles"
            });
            app.UseEndpoints(endpoints =>
            {
                 endpoints.MapControllers();
            });

        }
    }
}
