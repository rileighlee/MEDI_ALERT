using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicineAppApi.Migrations
{
    public partial class recoveryphrase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RecoveryPhrase",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RecoveryPhrase",
                table: "Users");
        }
    }
}
