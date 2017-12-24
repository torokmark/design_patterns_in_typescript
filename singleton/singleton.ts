namespace SingletonPattern {
    export class Singleton {
        // A variable which stores the singleton object. Intially,
        // the variable acts like a placeholder
        private static singleton: Singleton = null;
        // private constructor so that no instance is created
        private constructor() {
        }
        // This is how we create a singleton object
        public static Instance(): Singleton {
            // check if an instance of the class is already created
            if (this.singleton == null) {
                // If not created create an instance of the class
                // store the instance in the variable
                this.singleton = new Singleton();
            }
            // return the singleton object
            return this.singleton
        }
    }
}
