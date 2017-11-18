namespace Singleton {
    class Singleton {
        // A variable which stores the singleton object. Intially,
        // the variable acts like a placeholder
        private static __singleton: Singleton = null;
        // private constructor so that no instance is created
        private constructor() {
        }
        // This is how we create a singleton object
        public static getInstance(): Singleton {
            // check if an instance of the class is already created
            if (this.__singleton == null) {
                // If not created create an instance of the class
                // store the instance in the variable
                this.__singleton = new Singleton();
            }
            // return the singleton object
            return this.__singleton
        }
        public getSingletonName(name: string) {
            alert(`Singleton is ${name}`)
        }
    }
}
