using Microsoft.EntityFrameworkCore.Migrations;

namespace back_end.Migrations
{
    public partial class Dbv05 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Interest",
                table: "Destinations");

            migrationBuilder.AddColumn<bool>(
                name: "Interest",
                table: "Entries",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Interest",
                table: "Entries");

            migrationBuilder.AddColumn<bool>(
                name: "Interest",
                table: "Destinations",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
