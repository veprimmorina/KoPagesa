using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PagesaService.Migrations
{
    /// <inheritdoc />
    public partial class pershkrimi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Pershkrimi",
                table: "pagesa",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pershkrimi",
                table: "pagesa");
        }
    }
}
