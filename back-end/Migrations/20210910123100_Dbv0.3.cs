using Microsoft.EntityFrameworkCore.Migrations;

namespace back_end.Migrations
{
    public partial class Dbv03 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entires_Destinations_DestinationId",
                table: "Entires");

            migrationBuilder.DropForeignKey(
                name: "FK_Entires_Users_UserId",
                table: "Entires");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Entires",
                table: "Entires");

            migrationBuilder.RenameTable(
                name: "Entires",
                newName: "Entries");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Entries",
                newName: "AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Entires_UserId",
                table: "Entries",
                newName: "IX_Entries_AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Entires_DestinationId",
                table: "Entries",
                newName: "IX_Entries_DestinationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Entries",
                table: "Entries",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "AppUsers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Github = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    state = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUsers", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Entries_AppUsers_AppUserId",
                table: "Entries",
                column: "AppUserId",
                principalTable: "AppUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Entries_Destinations_DestinationId",
                table: "Entries",
                column: "DestinationId",
                principalTable: "Destinations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entries_AppUsers_AppUserId",
                table: "Entries");

            migrationBuilder.DropForeignKey(
                name: "FK_Entries_Destinations_DestinationId",
                table: "Entries");

            migrationBuilder.DropTable(
                name: "AppUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Entries",
                table: "Entries");

            migrationBuilder.RenameTable(
                name: "Entries",
                newName: "Entires");

            migrationBuilder.RenameColumn(
                name: "AppUserId",
                table: "Entires",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Entries_DestinationId",
                table: "Entires",
                newName: "IX_Entires_DestinationId");

            migrationBuilder.RenameIndex(
                name: "IX_Entries_AppUserId",
                table: "Entires",
                newName: "IX_Entires_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Entires",
                table: "Entires",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    state = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Entires_Destinations_DestinationId",
                table: "Entires",
                column: "DestinationId",
                principalTable: "Destinations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Entires_Users_UserId",
                table: "Entires",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
