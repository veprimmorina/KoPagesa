using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KoPagesa.Migrations
{
    /// <inheritdoc />
    public partial class patenta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Roli",
                table: "perdoruesi",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "patenta",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Fotografia = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Emri = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    Mbiemri = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    DataLindjes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumriPersonal = table.Column<string>(type: "nvarchar (45)", nullable: false),
                    Komuna = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    DataLeshimit = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    DataSkadences = table.Column<string>(type: "nvarchar (25)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patenta", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "patenta");

            migrationBuilder.DropColumn(
                name: "Roli",
                table: "perdoruesi");
        }
    }
}
