import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:8080/';
    public DiscoverApiUrl: string = 'discover';
    public MetricsApiUrl: string = 'metrics';
    public ServerWithDiscoverApiUrl = this.Server + this.DiscoverApiUrl;
    public ServerWithMetricsApiUrl = this.Server + this.MetricsApiUrl;
}
