import * as rx from "rxjs";
import { map, share } from "rxjs/operators";
import { v4 } from "uuid";
import { generateName, listOfNames } from "./names";

export interface UserData {
  id: string;
  name: string;
  signUpDate: number;
}

class Service {
  private dataSource = listOfNames;
  private wait = 200;
  private source = rx.interval(this.wait).pipe(
    map(() => generatePerson()),
    share()
  );

  fetchSingleUser = (): Promise<UserData> => {
    // should only be used in the example SingleUser component
    return new Promise((resolve) => {
      setTimeout(() => resolve(generatePerson()), this.wait);
    });
  };

  fetchUserList = (): Promise<UserData[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.dataSource), this.wait);
    });
  };

  /**
   * @param callback a callback that will fire every time a new user signs up
   * @returns a function to kill the subscription
   *
   * Example:
   *
   * ```
   * const disposer = listenForUser((user) => doSomething(user))
   * disposer() // will kill it
   * ```
   */
   listenForUser = (callback: (data: UserData) => void): Function => {
    const sub = this.source.subscribe((data) => {
      callback(data);
    });
    return () => {
      sub.unsubscribe();
    };
  };

  listenForUserRx = (): rx.Observable<UserData> => {
    // you don't need to use this, but you can if you want, as it actually more closely resembles LHR's code structure
    return this.source;
  };
}

const generatePerson = (): UserData => {
  return { id: v4(), name: generateName(), signUpDate: Date.now() };
};

export default Service;
