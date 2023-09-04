namespace SingletonPattern {
    export class Singleton {
        // A variable which stores the singleton object. Initially,
        // the variable acts like a placeholder
        private static singleton: Singleton;

        // private constructor so that no instance is created
        private constructor() {
        }

        // This is how we create a singleton object
        public static getInstance(): Singleton {
            // check if an instance of the class is already created
            if (!Singleton.singleton) {
                // If not created create an instance of the class
                // store the instance in the variable
                Singleton.singleton = new Singleton();
            }
            // return the singleton object
            return Singleton.singleton;
        }
    }
}
