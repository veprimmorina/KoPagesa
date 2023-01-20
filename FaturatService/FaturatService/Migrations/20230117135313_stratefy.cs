using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FaturatService.Migrations
{
    /// <inheritdoc />
    public partial class stratefy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_gjoba",
                table: "gjoba");

            migrationBuilder.RenameTable(
                name: "gjoba",
                newName: "Fatura");

            migrationBuilder.AlterColumn<string>(
                name: "Pershkrimi",
                table: "Fatura",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "NrPersonal",
                table: "Fatura",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Koha",
                table: "Fatura",
                type: "nvarchar (15)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar (15)");

            migrationBuilder.AlterColumn<bool>(
                name: "EPaguar",
                table: "Fatura",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<double>(
                name: "Denimi",
                table: "Fatura",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<string>(
                name: "Data",
                table: "Fatura",
                type: "nvarchar (25)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar (25)");

            migrationBuilder.AlterColumn<string>(
                name: "Adresa",
                table: "Fatura",
                type: "nvarchar (60)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar (60)");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Fatura",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Lloji",
                table: "Fatura",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Tipi",
                table: "Fatura",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fatura",
                table: "Fatura",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Fatura",
                table: "Fatura");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Fatura");

            migrationBuilder.DropColumn(
                name: "Lloji",
                table: "Fatura");

            migrationBuilder.DropColumn(
                name: "Tipi",
                table: "Fatura");

            migrationBuilder.RenameTable(
                name: "Fatura",
                newName: "gjoba");

            migrationBuilder.AlterColumn<string>(
                name: "Pershkrimi",
                table: "gjoba",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "NrPersonal",
                table: "gjoba",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Koha",
                table: "gjoba",
                type: "nvarchar (15)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar (15)",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "EPaguar",
                table: "gjoba",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Denimi",
                table: "gjoba",
                type: "float",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Data",
                table: "gjoba",
                type: "nvarchar (25)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar (25)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Adresa",
                table: "gjoba",
                type: "nvarchar (60)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar (60)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_gjoba",
                table: "gjoba",
                column: "Id");
        }
    }
}
