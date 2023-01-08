using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoPagesa.Migrations
{
    /// <inheritdoc />
    public partial class njoftime : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Njoftime",
                table: "perdoruesi",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Njoftime",
                table: "perdoruesi");
        }
    }
}
