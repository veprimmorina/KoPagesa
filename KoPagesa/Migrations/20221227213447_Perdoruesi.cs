using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoPagesa.Migrations
{
    /// <inheritdoc />
    public partial class Perdoruesi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "perdoruesi",
                columns: table => new
                {
                    PerdoruesiId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    Mbiemri = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    Emaili = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    Fjalkalimi = table.Column<string>(type: "nvarchar (30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_perdoruesi", x => x.PerdoruesiId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "perdoruesi");
        }
    }
}
