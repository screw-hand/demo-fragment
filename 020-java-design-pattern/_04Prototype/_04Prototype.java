package _04Prototype;

/**
 * 原型模式
 * 
 * 用原型实例制定创建对象的种类，并且通过复制这些原型创建新的对象。
 */
class Main {
  public static void main(String[] args) {
    Product product1 = new Product(2023, 5.1);
    System.out.println(product1.getId() + " " + product1.getPrice());
    Product product2 = (Product) product1.clone();
    System.out.println(product2.getId() + " " + product2.getPrice());
    Product product3 = (Product) product2.clone();
    System.out.println(product3.getId() + " " + product3.getPrice());
  }
}

interface Prototype {
  public Object clone();
}

class Product implements Prototype {
  private int id;
  private double price;

  public Product() {

  }

  public Product(int id, double price) {
    this.id = id;
    this.price = price;
  }

  public int getId() {
    return id;
  }

  public double getPrice() {
    return price;
  }

  @Override
  public Object clone() {
    Product object = new Product();
    object.id = this.id;
    object.price = this.price;
    return object;
  }
}