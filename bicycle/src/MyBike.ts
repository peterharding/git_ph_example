import { AluminumFrame } from "./AluminumFrame";
import { Bicycle } from "./Bicycle"
import { Brakes } from "./Brakes";
import { Cogset } from "./Cogset";
import { DiscBrakes } from "./DiscBrakes";
import { Frame } from "./frame";
import { NineSpeed } from "./NineSpeed";
import { Pedal } from "./Pedal";
import { PlatformPedal } from "./PlatformPedal";
import { RoadWheel } from "./RoadWheel";
import { Wheel } from "./wheel";

export class MyBike implements Bicycle {
  public brakes: Brakes;
  public frame: Frame;
  public gears: Cogset;
  public pedal: Pedal;
  public wheel: Wheel;

  constructor() {
    this.brakes = new DiscBrakes();
    this.frame = new AluminumFrame();
    this.gears = new NineSpeed;
    this.pedal = new PlatformPedal();
    this.wheel = new RoadWheel();
  }
}
