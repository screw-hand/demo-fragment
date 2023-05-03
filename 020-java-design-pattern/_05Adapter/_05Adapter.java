package _05Adapter;

/**
 * 适配器模式
 * 
 * 将一个类的接口转换成客户希望的另一个接口，
 * Adpater模式是的原本由于借口不兼容而不能一起工作澹那些累可以工作
 */
class Main {
  public static void main (String[] args) {
    Target target = new Adapter();
    target.Request();
  }
}

class Target {
  public void Request () {
    System.out.println("正常请求");
  }
}

class Adptee {
  public void SpectifiRequest () {
    System.out.println("特殊请求");
  }
}

class Adapter extends Target {
  private Adptee adptee = new Adptee();

  @Override
  public void Request () {
    adptee.SpectifiRequest();
  }
}