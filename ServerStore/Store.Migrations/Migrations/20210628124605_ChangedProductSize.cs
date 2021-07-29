using Microsoft.EntityFrameworkCore.Migrations;

namespace Store.Migrations.Migrations
{
    public partial class ChangedProductSize : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductsSize_Products_ProductId",
                table: "ProductsSize");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "ProductsSize",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductsSize_Products_ProductId",
                table: "ProductsSize",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductsSize_Products_ProductId",
                table: "ProductsSize");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "ProductsSize",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_ProductsSize_Products_ProductId",
                table: "ProductsSize",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
