﻿// <auto-generated />
using FaturatService;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FaturatService.Migrations
{
    [DbContext(typeof(FaturaContext))]
    partial class FaturaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("FaturatService.Models.Gjoba", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Adresa")
                        .IsRequired()
                        .HasColumnType("nvarchar (60)");

                    b.Property<string>("Data")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<double>("Denimi")
                        .HasColumnType("float");

                    b.Property<bool>("EPaguar")
                        .HasColumnType("bit");

                    b.Property<string>("Koha")
                        .IsRequired()
                        .HasColumnType("nvarchar (15)");

                    b.Property<string>("NrPersonal")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pershkrimi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("gjoba");
                });
#pragma warning restore 612, 618
        }
    }
}
