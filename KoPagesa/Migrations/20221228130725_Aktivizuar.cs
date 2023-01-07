using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoPagesa.Migrations
{
    /// <inheritdoc />
    public partial class Aktivizuar : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EAktivizuar",
                table: "patenta",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EAktivizuar",
                table: "patenta");
        }
    }
}
