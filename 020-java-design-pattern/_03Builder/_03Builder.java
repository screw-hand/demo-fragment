package _03Builder;

import java.util.*;

/**
 * 生成器模式
 * 
 * 将一个复杂对象的构建与它的表现分离，使得同样的构建过程可以创建不同的表示。
 */
class Main {
  public static void main (String[] args) {
    Direactor direactor = new Direactor();

    // Builder type 1
    Builder builder1 = new Builder1();
    direactor.construct(builder1);
    Product product1 = builder1.getResult();
    product1.show();

    // Builder type 2
    Builder builder2 = new Builder2();
    direactor.construct(builder2);
    Product product2 = builder2.getResult();
    product2.show();
  }
}

class Direactor {
  public void construct (Builder builder) {
    builder.buildPart();
  }
}

abstract class Builder {
  abstract public void buildPart();
  abstract public Product getResult();
}

class Builder1 extends Builder {
  Product product = new Product();
  @Override
  public void buildPart () {
    product.add("A");
    product.add("B");
    product.add("C");
    product.add("D");
    product.add("E");
  }

  @Override
  public Product getResult () {
    return product;
  }
}

class Builder2 extends Builder {
  Product product = new Product();
  @Override
  public void buildPart () {
    product.add("F");
    product.add("G");
    product.add("H");
    product.add("I");
    product.add("J");
  }

  @Override
  public Product getResult () {
    return product;
  }
}

class Product  {
  List<String> parts = new ArrayList<String>();

  public void add (String part) {
    parts.add(part);
  }

  public void show () {
    System.out.println("产品组成为：");
    for (String s: parts) {
      System.out.println(s);
    }
  }
}