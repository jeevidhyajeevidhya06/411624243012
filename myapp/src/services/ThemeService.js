class ThemeService {
  constructor() {
    this.theme = "Light";
    this.observers = [];
  }

  // Register an observer
  attach(observer) {
    this.observers.push(observer);
  }

  // Remove an observer
  detach(observer) {
    this.observers = this.observers.filter(
      (obs) => obs !== observer
    );
  }

  // Notify all observers
  notify() {
    this.observers.forEach((observer) => {
      observer(this.theme);
    });
  }

  // Toggle theme
  toggleTheme() {
    this.theme = this.theme === "Light" ? "Dark" : "Light";
    this.notify();
  }

  // Get current theme
  getTheme() {
    return this.theme;
  }
}

// Export a single instance (Singleton)
const themeService = new ThemeService();

export default themeService;