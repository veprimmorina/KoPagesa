using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PagesaService.Migrations
{
    /// <inheritdoc />
    public partial class pagesaper : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "LlojiPageses",
                table: "pagesa",
                type: "nvarchar(30)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "PagesaPer",
                table: "pagesa",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PagesaPer",
                table: "pagesa");

            migrationBuilder.AlterColumn<int>(
                name: "LlojiPageses",
                table: "pagesa",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)");
        }
    }
}
