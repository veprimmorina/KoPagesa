using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoPagesa.Migrations
{
    /// <inheritdoc />
    public partial class numri : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NumriPersonal",
                table: "perdoruesi",
                type: "nvarchar(30)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumriPersonal",
                table: "perdoruesi");
        }
    }
}
