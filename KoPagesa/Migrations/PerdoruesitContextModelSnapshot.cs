﻿// <auto-generated />
using KoPagesa;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace KoPagesa.Migrations
{
    [DbContext(typeof(PerdoruesitContext))]
    partial class PerdoruesitContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("KoPagesa.Models.Patenta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("DataLeshimit")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("DataLindjes")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataSkadences")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<bool>("EAktivizuar")
                        .HasColumnType("bit");

                    b.Property<string>("Emri")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("Fotografia")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Komuna")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("Mbiemri")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("NumriPersonal")
                        .IsRequired()
                        .HasColumnType("nvarchar (45)");

                    b.HasKey("Id");

                    b.ToTable("patenta");
                });

            modelBuilder.Entity("KoPagesa.Models.Perdoruesi", b =>
                {
                    b.Property<int>("PerdoruesiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PerdoruesiId"));

                    b.Property<string>("Emaili")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("Emri")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<string>("Fjalkalimi")
                        .IsRequired()
                        .HasColumnType("nvarchar (30)");

                    b.Property<string>("Mbiemri")
                        .IsRequired()
                        .HasColumnType("nvarchar (25)");

                    b.Property<int>("Njoftime")
                        .HasColumnType("int");

                    b.Property<string>("NumriPersonal")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("Roli")
                        .HasColumnType("int");

                    b.HasKey("PerdoruesiId");

                    b.ToTable("perdoruesi");
                });
#pragma warning restore 612, 618
        }
    }
}
