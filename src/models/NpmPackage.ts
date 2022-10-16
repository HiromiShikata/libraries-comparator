export class NpmPackage {
  constructor(
    readonly name: string,
    readonly comment: string,
    readonly stars: number,
    readonly forks: number,
    readonly pullRequests: number,
    readonly weeklyDownloads: number,
    readonly lastRelease: Date,
    readonly unpackedSize: number,
    readonly license: string,
  ) {}
}
