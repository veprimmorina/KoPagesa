using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PagesaService.Migrations
{
    /// <inheritdoc />
    public partial class llojipageses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "LlojiPageses",
                table: "pagesa",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar (25)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "LlojiPageses",
                table: "pagesa",
                type: "nvarchar (25)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
