using Microsoft.EntityFrameworkCore.Migrations;

namespace Store.Migrations.Migrations
{
    public partial class Delite : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ProdutsSize",
                table: "ProdutsSize");

            migrationBuilder.DropColumn(
                name: "DetailedDescription",
                table: "Products");

            migrationBuilder.RenameTable(
                name: "ProdutsSize",
                newName: "ProductsSize");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductsSize",
                table: "ProductsSize",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductsSize",
                table: "ProductsSize");

            migrationBuilder.RenameTable(
                name: "ProductsSize",
                newName: "ProdutsSize");

            migrationBuilder.AddColumn<string>(
                name: "DetailedDescription",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProdutsSize",
                table: "ProdutsSize",
                column: "Id");
        }
    }
}
