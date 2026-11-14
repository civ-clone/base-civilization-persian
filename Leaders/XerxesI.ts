import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Persian from '../Persian';

export class XerxesI extends Leader {
  static civilization(): typeof Civilization {
    return Persian;
  }

  name(): string {
    return 'Xerxes I';
  }
}

export default XerxesI;
