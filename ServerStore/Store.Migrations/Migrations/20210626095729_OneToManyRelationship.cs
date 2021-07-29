using Microsoft.EntityFrameworkCore.Migrations;

namespace Store.Migrations.Migrations
{
    public partial class OneToManyRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductID",
                table: "ProductsSize",
                newName: "ProductId");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "ProductsSize",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_ProductsSize_ProductId",
                table: "ProductsSize",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductsSize_Products_ProductId",
                table: "ProductsSize",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductsSize_Products_ProductId",
                table: "ProductsSize");

            migrationBuilder.DropIndex(
                name: "IX_ProductsSize_ProductId",
                table: "ProductsSize");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "ProductsSize",
                newName: "ProductID");

            migrationBuilder.AlterColumn<int>(
                name: "ProductID",
                table: "ProductsSize",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
