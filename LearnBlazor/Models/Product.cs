using System.ComponentModel.DataAnnotations;

namespace LearnBlazor.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public bool IsActive { get; set; }
        [Range(1,1000)]
        public double Price { get; set; }
        public IEnumerable<ProductProp> ProductProperties { get; set; }

        public DateOnly AvailableAfter { get; set; }
        public Category Category { get; set; }

        public Product()
        {
            AvailableAfter = DateOnly.FromDateTime(DateTime.Now);
        }
    }

    public enum Category
    {
        Entree,
        Apetizer,
        Dessert
    }
}
