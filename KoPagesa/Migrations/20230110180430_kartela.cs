using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoPagesa.Migrations
{
    /// <inheritdoc />
    public partial class kartela : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CVC",
                table: "perdoruesi",
                type: "nvarchar(5)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DataSkadimit",
                table: "perdoruesi",
                type: "nvarchar(10)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MbajtesiKarteles",
                table: "perdoruesi",
                type: "nvarchar(40)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NumriKarteles",
                table: "perdoruesi",
                type: "nvarchar(30)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CVC",
                table: "perdoruesi");

            migrationBuilder.DropColumn(
                name: "DataSkadimit",
                table: "perdoruesi");

            migrationBuilder.DropColumn(
                name: "MbajtesiKarteles",
                table: "perdoruesi");

            migrationBuilder.DropColumn(
                name: "NumriKarteles",
                table: "perdoruesi");
        }
    }
}
