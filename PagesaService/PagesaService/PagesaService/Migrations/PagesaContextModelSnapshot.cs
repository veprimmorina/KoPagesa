﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PagesaService;

#nullable disable

namespace PagesaService.Migrations
{
    [DbContext(typeof(PagesaContext))]
    partial class PagesaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("PagesaService.Models.Pagesat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Emri")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("LlojiPageses")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Mbiemri")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("NrPersonal")
                        .IsRequired()
                        .HasColumnType("nvarchar (20)");

                    b.Property<int>("PagesaPer")
                        .HasColumnType("int");

                    b.Property<string>("Pershkrimi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Shuma")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("pagesa");
                });
#pragma warning restore 612, 618
        }
    }
}
