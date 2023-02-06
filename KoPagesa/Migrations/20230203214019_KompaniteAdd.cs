using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoPagesa.Migrations
{
    /// <inheritdoc />
    public partial class KompaniteAdd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "FaktoriPH",
                table: "perdoruesi",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NumriKamioneve",
                table: "perdoruesi",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "ShpejtesiaInternetit",
                table: "perdoruesi",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StacioniPolicor",
                table: "perdoruesi",
                type: "nvarchar(20)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nrBiznesit",
                table: "perdoruesi",
                type: "nvarchar(20)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FaktoriPH",
                table: "perdoruesi");

            migrationBuilder.DropColumn(
                name: "NumriKamioneve",
                table: "perdoruesi");

            migrationBuilder.DropColumn(
                name: "ShpejtesiaInternetit",
                table: "perdoruesi");

            migrationBuilder.DropColumn(
                name: "StacioniPolicor",
                table: "perdoruesi");

            migrationBuilder.DropColumn(
                name: "nrBiznesit",
                table: "perdoruesi");
        }
    }
}
