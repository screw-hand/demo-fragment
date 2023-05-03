package _06Bridge;

/**
 * 桥接模式
 * 
 * 把一个产品的组合，抽象分离出来
 */

class Bridge {
  public static void main (String[] args) {
    ProductA productA1 = new ProductA();
    Color red = new Red();
    productA1.setColor(red);
    productA1.setName("A1");
    productA1.Operation();

    ProductA productA2 = new ProductA();
    Color blue = new Blue();
    productA2.setColor(blue);
    productA2.setName("A2");
    productA2.Operation();
  }
}

interface Color {
  public void OperationImp(String name);
}

class Red implements Color {
  @Override
  public void OperationImp(String name) {
    System.out.println(name + "红色");
  }
}

class Blue implements Color {
  @Override
  public void OperationImp(String name) {
    System.out.println(name + "蓝色");
  }
}

abstract class Product {
  protected Color color;
  private String name;

  public void setName (String name) {
    this.name = name;
  }

  public String getName () {
    return name;
  }

  public void setColor(Color color) {
    this.color = color;
  }

  abstract public void Operation ();
}

class ProductA extends Product {
  @Override
  public void Operation() {
    color.OperationImp(getName());
  }
}