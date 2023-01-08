using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FaturatService.Migrations
{
    /// <inheritdoc />
    public partial class Gjoba1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "gjoba",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pershkrimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NrPersonal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Data = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    Koha = table.Column<string>(type: "nvarchar (15)", nullable: false),
                    Adresa = table.Column<string>(type: "nvarchar (60)", nullable: false),
                    Denimi = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gjoba", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "gjoba");
        }
    }
}
