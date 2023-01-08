using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PagesaService.Migrations
{
    /// <inheritdoc />
    public partial class Pagesa : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "pagesa",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Shuma = table.Column<double>(type: "float", nullable: false),
                    NrPersonal = table.Column<string>(type: "nvarchar (20)", nullable: false),
                    Emri = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    Mbiemri = table.Column<string>(type: "nvarchar (25)", nullable: false),
                    LlojiPageses = table.Column<string>(type: "nvarchar (25)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pagesa", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "pagesa");
        }
    }
}
