
export default class CacheBustedLoaderPlugin extends Phaser.Loader.LoaderPlugin {
  public manifest: Record<string, string> | null = null;

  constructor(scene: Phaser.Scene) {
    super(scene);
  }

  addFile(file: Phaser.Loader.File | Phaser.Loader.File[]): void {
    if (!Array.isArray(file)) {
      file = [file];
    }

    file.forEach((item) => {
      if (this.manifest) {
        const index = `/${typeof item.url === "string" ? item.url.replace(/\/\//g, "/") : "" }`;
        const timestamp = index in this.manifest ? this.manifest[index] : undefined;
        if (timestamp) {
          item.url += `?t=${timestamp}`;
        }
      }
    });

    super.addFile(file);
  }
}
