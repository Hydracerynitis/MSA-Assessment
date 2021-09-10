using Microsoft.EntityFrameworkCore.Migrations;

namespace back_end.Migrations
{
    public partial class Dbv02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entires_Locations_LocationId",
                table: "Entires");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.RenameColumn(
                name: "LocationId",
                table: "Entires",
                newName: "DestinationId");

            migrationBuilder.RenameIndex(
                name: "IX_Entires_LocationId",
                table: "Entires",
                newName: "IX_Entires_DestinationId");

            migrationBuilder.AlterColumn<string>(
                name: "ImgUrl",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Destinations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Interest = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinations", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Entires_Destinations_DestinationId",
                table: "Entires",
                column: "DestinationId",
                principalTable: "Destinations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entires_Destinations_DestinationId",
                table: "Entires");

            migrationBuilder.DropTable(
                name: "Destinations");

            migrationBuilder.RenameColumn(
                name: "DestinationId",
                table: "Entires",
                newName: "LocationId");

            migrationBuilder.RenameIndex(
                name: "IX_Entires_DestinationId",
                table: "Entires",
                newName: "IX_Entires_LocationId");

            migrationBuilder.AlterColumn<string>(
                name: "ImgUrl",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Interest = table.Column<bool>(type: "bit", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Entires_Locations_LocationId",
                table: "Entires",
                column: "LocationId",
                principalTable: "Locations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
