﻿// <auto-generated />
using MedicineAppApi.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MedicineAppApi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20231122145949_first")]
    partial class first
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("MedicineAppApi.Domain.Interaction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ConflictDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Medicine1Id")
                        .HasColumnType("int");

                    b.Property<int>("Medicine2Id")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Medicine1Id");

                    b.HasIndex("Medicine2Id");

                    b.ToTable("Interactions");
                });

            modelBuilder.Entity("MedicineAppApi.Domain.Medicine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DosageAndFrequency")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Overdosage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Precautions")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Medicines");
                });

            modelBuilder.Entity("MedicineAppApi.Domain.Interaction", b =>
                {
                    b.HasOne("MedicineAppApi.Domain.Medicine", "Medicine1")
                        .WithMany()
                        .HasForeignKey("Medicine1Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MedicineAppApi.Domain.Medicine", "Medicine2")
                        .WithMany()
                        .HasForeignKey("Medicine2Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Medicine1");

                    b.Navigation("Medicine2");
                });
#pragma warning restore 612, 618
        }
    }
}