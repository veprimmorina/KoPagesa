using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FaturatService.Migrations
{
    /// <inheritdoc />
    public partial class EPaguar : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EPaguar",
                table: "gjoba",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EPaguar",
                table: "gjoba");
        }
    }
}
