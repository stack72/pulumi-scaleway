// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

export interface BaremetalServerIp {
    /**
     * The address of the IP.
     */
    address: string;
    /**
     * The ID of the IP.
     */
    id: string;
    /**
     * The reverse of the IP.
     */
    reverse: string;
    version: string;
}

export interface DatabaseAclAclRule {
    /**
     * A simple text describing this rule
     */
    description?: string;
    /**
     * The ip range to whitelist in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)
     */
    ip: string;
}

export interface DatabaseInstanceLoadBalancer {
    /**
     * The ID of the endpoint of the private network.
     */
    endpointId: string;
    /**
     * Name of the endpoint.
     */
    hostname: string;
    /**
     * IP of the endpoint.
     */
    ip: string;
    /**
     * The name of the Database Instance.
     */
    name: string;
    /**
     * Port of the endpoint.
     */
    port: number;
}

export interface DatabaseInstancePrivateNetwork {
    /**
     * The ID of the endpoint of the private network.
     */
    endpointId: string;
    /**
     * Name of the endpoint.
     */
    hostname: string;
    /**
     * IP of the endpoint.
     */
    ip: string;
    ipNet: string;
    /**
     * The name of the Database Instance.
     */
    name: string;
    pnId: string;
    /**
     * Port of the endpoint.
     */
    port: number;
    zone: string;
}

export interface DatabaseInstanceReadReplica {
    /**
     * IP of the endpoint.
     */
    ip: string;
    /**
     * The name of the Database Instance.
     */
    name: string;
    /**
     * Port of the endpoint.
     */
    port: number;
}

export interface DomainRecordGeoIp {
    /**
     * The list of matches. *(Can be more than 1)*
     */
    matches: outputs.DomainRecordGeoIpMatch[];
}

export interface DomainRecordGeoIpMatch {
    /**
     * List of continents (eg: `EU` for Europe, `NA` for North America, `AS` for Asia...). [List of all continents code](https://api.scaleway.com/domain-private/v2beta1/continents)
     */
    continents?: string[];
    /**
     * List of countries (eg: `FR` for France, `US` for the United States, `GB` for Great Britain...). [List of all countries code](https://api.scaleway.com/domain-private/v2beta1/countries)
     */
    countries?: string[];
    /**
     * The data of the view record
     */
    data: string;
}

export interface DomainRecordHttpService {
    /**
     * List of IPs to check
     */
    ips: string[];
    /**
     * Text to search
     */
    mustContain: string;
    /**
     * Strategy to return an IP from the IPs list. Can be `random` or `hashed`
     */
    strategy: string;
    /**
     * URL to match the `mustContain` text to validate an IP
     */
    url: string;
    /**
     * User-agent used when checking the URL
     */
    userAgent?: string;
}

export interface DomainRecordView {
    /**
     * The data of the view record
     */
    data: string;
    /**
     * The subnet of the view
     */
    subnet: string;
}

export interface DomainRecordWeighted {
    /**
     * The weighted IP
     */
    ip: string;
    /**
     * The weight of the IP as an integer UInt32.
     */
    weight: number;
}

export interface GetBaremetalOfferCpu {
    coreCount: number;
    /**
     * Frequency of the memory in MHz.
     */
    frequency: number;
    /**
     * The offer name. Only one of `name` and `offerId` should be specified.
     */
    name: string;
    threadCount: number;
}

export interface GetBaremetalOfferDisk {
    capacity: number;
    /**
     * Type of memory.
     */
    type: string;
}

export interface GetBaremetalOfferMemory {
    capacity: number;
    /**
     * Frequency of the memory in MHz.
     */
    frequency: number;
    isEcc: boolean;
    /**
     * Type of memory.
     */
    type: string;
}

export interface GetDatabaseAclAclRule {
    /**
     * A simple text describing this rule
     */
    description: string;
    /**
     * The ip range to whitelist in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)
     */
    ip: string;
}

export interface GetDatabaseInstanceLoadBalancer {
    endpointId: string;
    hostname: string;
    ip: string;
    /**
     * The name of the RDB instance.
     * Only one of `name` and `instanceId` should be specified.
     */
    name: string;
    port: number;
}

export interface GetDatabaseInstancePrivateNetwork {
    endpointId: string;
    hostname: string;
    ip: string;
    ipNet: string;
    /**
     * The name of the RDB instance.
     * Only one of `name` and `instanceId` should be specified.
     */
    name: string;
    pnId: string;
    port: number;
    zone: string;
}

export interface GetDatabaseInstanceReadReplica {
    ip: string;
    /**
     * The name of the RDB instance.
     * Only one of `name` and `instanceId` should be specified.
     */
    name: string;
    port: number;
}

export interface GetDomainRecordGeoIp {
    matches: outputs.GetDomainRecordGeoIpMatch[];
}

export interface GetDomainRecordGeoIpMatch {
    continents: string[];
    countries: string[];
    /**
     * The content of the record (an IPv4 for an `A`, a string for a `TXT`...).
     * Cannot be used with `recordId`.
     */
    data: string;
}

export interface GetDomainRecordHttpService {
    ips: string[];
    mustContain: string;
    strategy: string;
    url: string;
    userAgent: string;
}

export interface GetDomainRecordView {
    /**
     * The content of the record (an IPv4 for an `A`, a string for a `TXT`...).
     * Cannot be used with `recordId`.
     */
    data: string;
    subnet: string;
}

export interface GetDomainRecordWeighted {
    ip: string;
    weight: number;
}

export interface GetInstanceSecurityGroupInboundRule {
    /**
     * The action to take when rule match. Possible values are: `accept` or `drop`.
     */
    action: string;
    ip: string;
    ipRange: string;
    port: number;
    portRange: string;
    protocol: string;
}

export interface GetInstanceSecurityGroupOutboundRule {
    /**
     * The action to take when rule match. Possible values are: `accept` or `drop`.
     */
    action: string;
    ip: string;
    ipRange: string;
    port: number;
    portRange: string;
    protocol: string;
}

export interface GetInstanceServerPrivateNetwork {
    macAddress: string;
    pnId: string;
    status: string;
    /**
     * `zone`) The zone in which the server exists.
     */
    zone: string;
}

export interface GetInstanceServerRootVolume {
    boot: boolean;
    /**
     * Forces deletion of the root volume on instance termination.
     */
    deleteOnTermination: boolean;
    /**
     * Size of the root volume in gigabytes.
     */
    sizeInGb: number;
    /**
     * The volume ID of the root volume of the server.
     */
    volumeId: string;
}

export interface GetKubernetesClusterAutoUpgrade {
    /**
     * True if Kubernetes patch version auto upgrades is enabled.
     */
    enable: boolean;
    /**
     * The day of the auto upgrade maintenance window (`monday` to `sunday`, or `any`).
     */
    maintenanceWindowDay: string;
    /**
     * The start hour (UTC) of the 2-hour auto upgrade maintenance window (0 to 23).
     */
    maintenanceWindowStartHour: number;
}

export interface GetKubernetesClusterAutoscalerConfig {
    /**
     * True if detecting similar node groups and balance the number of nodes between them is enabled.
     */
    balanceSimilarNodeGroups: boolean;
    /**
     * True if the scale down feature of the autoscaler is disabled.
     */
    disableScaleDown: boolean;
    /**
     * The type of resource estimator used in scale up.
     */
    estimator: string;
    /**
     * The type of node group expander be used in scale up.
     */
    expander: string;
    /**
     * Pods with priority below cutoff will be expendable. They can be killed without any consideration during scale down and they don't cause scale up. Pods with null priority (PodPriority disabled) are non expendable.
     */
    expendablePodsPriorityCutoff: number;
    /**
     * True if ignoring DaemonSet pods when calculating resource utilization for scaling down is enabled.
     */
    ignoreDaemonsetsUtilization: boolean;
    maxGracefulTerminationSec: number;
    /**
     * The duration after scale up that scale down evaluation resumes.
     */
    scaleDownDelayAfterAdd: string;
    /**
     * The duration a node should be unneeded before it is eligible for scale down.
     */
    scaleDownUnneededTime: string;
    scaleDownUtilizationThreshold: number;
}

export interface GetKubernetesClusterKubeconfig {
    /**
     * The CA certificate of the Kubernetes API server.
     */
    clusterCaCertificate: string;
    /**
     * The raw kubeconfig file.
     */
    configFile: string;
    /**
     * The URL of the Kubernetes API server.
     */
    host: string;
    /**
     * The token to connect to the Kubernetes API server.
     */
    token: string;
}

export interface GetKubernetesClusterOpenIdConnectConfig {
    clientId: string;
    groupsClaims: string[];
    groupsPrefix: string;
    issuerUrl: string;
    requiredClaims: string[];
    usernameClaim: string;
    usernamePrefix: string;
}

export interface GetKubernetesNodePoolNode {
    /**
     * The pool name. Only one of `name` and `poolId` should be specified. `clusterId` should be specified with `name`.
     */
    name: string;
    /**
     * The public IPv4.
     */
    publicIp: string;
    /**
     * The public IPv6.
     */
    publicIpV6: string;
    /**
     * The status of the node.
     */
    status: string;
}

export interface GetKubernetesNodePoolUpgradePolicy {
    maxSurge: number;
    maxUnavailable: number;
}

export interface GetLoadbalancerPrivateNetwork {
    dhcpConfig: boolean;
    privateNetworkId: string;
    staticConfigs: string[];
    status: string;
    /**
     * `region`) The region in which the LB exists.
     */
    zone: string;
}

export interface InstanceSecurityGroupInboundRule {
    /**
     * The action to take when rule match. Possible values are: `accept` or `drop`.
     */
    action: string;
    /**
     * The ip this rule apply to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ip?: string;
    /**
     * The ip range (e.g `192.168.1.0/24`) this rule applies to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ipRange?: string;
    /**
     * The port this rule applies to. If no `port` nor `portRange` are specified, the rule will apply to all port. Only one of `port` and `portRange` should be specified.
     */
    port?: number;
    portRange?: string;
    /**
     * The protocol this rule apply to. Possible values are: `TCP`, `UDP`, `ICMP` or `ANY`.
     */
    protocol?: string;
}

export interface InstanceSecurityGroupOutboundRule {
    /**
     * The action to take when rule match. Possible values are: `accept` or `drop`.
     */
    action: string;
    /**
     * The ip this rule apply to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ip?: string;
    /**
     * The ip range (e.g `192.168.1.0/24`) this rule applies to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ipRange?: string;
    /**
     * The port this rule applies to. If no `port` nor `portRange` are specified, the rule will apply to all port. Only one of `port` and `portRange` should be specified.
     */
    port?: number;
    portRange?: string;
    /**
     * The protocol this rule apply to. Possible values are: `TCP`, `UDP`, `ICMP` or `ANY`.
     */
    protocol?: string;
}

export interface InstanceSecurityGroupRulesInboundRule {
    /**
     * The action to take when rule match. Possible values are: `accept` or `drop`.
     */
    action: string;
    /**
     * The ip this rule apply to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ip?: string;
    /**
     * The ip range (e.g `192.168.1.0/24`) this rule applies to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ipRange?: string;
    /**
     * The port this rule apply to. If no port is specified, rule will apply to all port.
     */
    port?: number;
    portRange?: string;
    /**
     * The protocol this rule apply to. Possible values are: `TCP`, `UDP`, `ICMP` or `ANY`.
     */
    protocol?: string;
}

export interface InstanceSecurityGroupRulesOutboundRule {
    /**
     * The action to take when rule match. Possible values are: `accept` or `drop`.
     */
    action: string;
    /**
     * The ip this rule apply to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ip?: string;
    /**
     * The ip range (e.g `192.168.1.0/24`) this rule applies to. If no `ip` nor `ipRange` are specified, rule will apply to all ip. Only one of `ip` and `ipRange` should be specified.
     */
    ipRange?: string;
    /**
     * The port this rule apply to. If no port is specified, rule will apply to all port.
     */
    port?: number;
    portRange?: string;
    /**
     * The protocol this rule apply to. Possible values are: `TCP`, `UDP`, `ICMP` or `ANY`.
     */
    protocol?: string;
}

export interface InstanceServerPrivateNetwork {
    macAddress: string;
    pnId: string;
    status: string;
    /**
     * `zone`) The zone in which the server should be created.
     */
    zone: string;
}

export interface InstanceServerRootVolume {
    boot?: boolean;
    /**
     * Forces deletion of the root volume on instance termination.
     */
    deleteOnTermination?: boolean;
    /**
     * Size of the root volume in gigabytes.
     * To find the right size use [this endpoint](https://api.scaleway.com/instance/v1/zones/fr-par-1/products/servers) and
     * check the `volumes_constraint.{min|max}_size` (in bytes) for your `commercialType`.
     * Updates to this field will recreate a new resource.
     */
    sizeInGb: number;
    /**
     * The volume ID of the root volume of the server.
     */
    volumeId: string;
}

export interface IotDeviceCertificate {
    crt: string;
    /**
     * The private key of the device, in case it is generated by Scaleway.
     */
    key: string;
}

export interface IotDeviceMessageFilters {
    /**
     * Rules used to restrict topics the device can publish to.
     */
    publish?: outputs.IotDeviceMessageFiltersPublish;
    /**
     * Rules used to restrict topics the device can subscribe to.
     */
    subscribe?: outputs.IotDeviceMessageFiltersSubscribe;
}

export interface IotDeviceMessageFiltersPublish {
    /**
     * Same as publish rules.
     */
    policy?: string;
    /**
     * Same as publish rules.
     */
    topics?: string[];
}

export interface IotDeviceMessageFiltersSubscribe {
    /**
     * Same as publish rules.
     */
    policy?: string;
    /**
     * Same as publish rules.
     */
    topics?: string[];
}

export interface IotRouteDatabase {
    dbname: string;
    host: string;
    password: string;
    port: number;
    query: string;
    username: string;
}

export interface IotRouteRest {
    headers: {[key: string]: string};
    uri: string;
    verb: string;
}

export interface IotRouteS3 {
    bucketName: string;
    bucketRegion: string;
    objectPrefix?: string;
    strategy: string;
}

export interface KubernetesClusterAutoUpgrade {
    /**
     * Set to `true` to enable Kubernetes patch version auto upgrades.
     * > **Important:** When enabling auto upgrades, the `version` field take a minor version like x.y (ie 1.18).
     */
    enable: boolean;
    /**
     * The day of the auto upgrade maintenance window (`monday` to `sunday`, or `any`).
     */
    maintenanceWindowDay: string;
    /**
     * The start hour (UTC) of the 2-hour auto upgrade maintenance window (0 to 23).
     */
    maintenanceWindowStartHour: number;
}

export interface KubernetesClusterAutoscalerConfig {
    /**
     * Detect similar node groups and balance the number of nodes between them.
     */
    balanceSimilarNodeGroups?: boolean;
    /**
     * Disables the scale down feature of the autoscaler.
     */
    disableScaleDown?: boolean;
    /**
     * Type of resource estimator to be used in scale up.
     */
    estimator?: string;
    /**
     * Type of node group expander to be used in scale up.
     */
    expander?: string;
    /**
     * Pods with priority below cutoff will be expendable. They can be killed without any consideration during scale down and they don't cause scale up. Pods with null priority (PodPriority disabled) are non expendable.
     */
    expendablePodsPriorityCutoff?: number;
    /**
     * Ignore DaemonSet pods when calculating resource utilization for scaling down.
     */
    ignoreDaemonsetsUtilization?: boolean;
    /**
     * Maximum number of seconds the cluster autoscaler waits for pod termination when trying to scale down a node
     */
    maxGracefulTerminationSec?: number;
    /**
     * How long after scale up that scale down evaluation resumes.
     */
    scaleDownDelayAfterAdd?: string;
    /**
     * How long a node should be unneeded before it is eligible for scale down.
     */
    scaleDownUnneededTime?: string;
    /**
     * Node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for scale down
     */
    scaleDownUtilizationThreshold?: number;
}

export interface KubernetesClusterKubeconfig {
    /**
     * The CA certificate of the Kubernetes API server.
     */
    clusterCaCertificate: string;
    /**
     * The raw kubeconfig file.
     */
    configFile: string;
    /**
     * The URL of the Kubernetes API server.
     */
    host: string;
    /**
     * The token to connect to the Kubernetes API server.
     */
    token: string;
}

export interface KubernetesClusterOpenIdConnectConfig {
    /**
     * A client id that all tokens must be issued for
     */
    clientId: string;
    /**
     * JWT claim to use as the user's group
     */
    groupsClaims?: string[];
    /**
     * Prefix prepended to group claims
     */
    groupsPrefix?: string;
    /**
     * URL of the provider which allows the API server to discover public signing keys
     */
    issuerUrl: string;
    /**
     * Multiple key=value pairs that describes a required claim in the ID Token
     */
    requiredClaims?: string[];
    /**
     * JWT claim to use as the user name
     */
    usernameClaim?: string;
    /**
     * Prefix prepended to username
     */
    usernamePrefix?: string;
}

export interface KubernetesNodePoolNode {
    /**
     * The name for the pool.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    name: string;
    /**
     * The public IPv4.
     */
    publicIp: string;
    /**
     * The public IPv6.
     */
    publicIpV6: string;
    /**
     * The status of the node.
     */
    status: string;
}

export interface KubernetesNodePoolUpgradePolicy {
    /**
     * The maximum number of nodes to be created during the upgrade
     */
    maxSurge?: number;
    /**
     * The maximum number of nodes that can be not ready at the same time
     */
    maxUnavailable?: number;
}

export interface LoadbalancerBackendHealthCheckHttp {
    /**
     * The expected HTTP status code.
     */
    code?: number;
    /**
     * The HTTP method to use for HC requests.
     */
    method?: string;
    /**
     * The HTTPS endpoint URL to call for HC requests.
     */
    uri: string;
}

export interface LoadbalancerBackendHealthCheckHttps {
    /**
     * The expected HTTP status code.
     */
    code?: number;
    /**
     * The HTTP method to use for HC requests.
     */
    method?: string;
    /**
     * The HTTPS endpoint URL to call for HC requests.
     */
    uri: string;
}

export interface LoadbalancerBackendHealthCheckTcp {
}

export interface LoadbalancerCertificateCustomCertificate {
    /**
     * Full PEM-formatted certificate chain.
     */
    certificateChain: string;
}

export interface LoadbalancerCertificateLetsencrypt {
    /**
     * Main domain of the certificate.
     */
    commonName: string;
    /**
     * Array of alternative domain names.
     */
    subjectAlternativeNames?: string[];
}

export interface LoadbalancerFrontendAcl {
    /**
     * Action to undertake when an ACL filter matches.
     */
    action: outputs.LoadbalancerFrontendAclAction;
    /**
     * The ACL match rule. At least `ipSubnet` or `httpFilter` and `httpFilterValue` are required.
     */
    match: outputs.LoadbalancerFrontendAclMatch;
    /**
     * The ACL name. If not provided it will be randomly generated.
     */
    name: string;
}

export interface LoadbalancerFrontendAclAction {
    /**
     * The action type. Possible values are: `allow` or `deny`.
     */
    type: string;
}

export interface LoadbalancerFrontendAclMatch {
    /**
     * The HTTP filter to match. This filter is supported only if your backend protocol has an HTTP forward protocol.
     * It extracts the request's URL path, which starts at the first slash and ends before the question mark (without the host part).
     * Possible values are: `aclHttpFilterNone`, `pathBegin`, `pathEnd` or `regex`.
     */
    httpFilter?: string;
    /**
     * A list of possible values to match for the given HTTP filter.
     */
    httpFilterValues?: string[];
    /**
     * If set to `true`, the condition will be of type "unless".
     */
    invert?: boolean;
    /**
     * A list of IPs or CIDR v4/v6 addresses of the client of the session to match.
     */
    ipSubnets?: string[];
}

export interface LoadbalancerPrivateNetwork {
    dhcpConfig: boolean;
    privateNetworkId: string;
    staticConfigs: string[];
    /**
     * The Private Network attachment status
     */
    status: string;
    /**
     * `zone`) The zone in which the IP should be reserved.
     */
    zone: string;
}

export interface ObjectBucketCorsRule {
    /**
     * Specifies which headers are allowed.
     */
    allowedHeaders?: string[];
    /**
     * Specifies which methods are allowed. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.
     */
    allowedMethods: string[];
    /**
     * Specifies which origins are allowed.
     */
    allowedOrigins: string[];
    /**
     * Specifies expose header in the response.
     */
    exposeHeaders?: string[];
    /**
     * Specifies time in seconds that browser can cache the response for a preflight request.
     */
    maxAgeSeconds?: number;
}

export interface ObjectBucketVersioning {
    /**
     * Enable versioning. Once you version-enable a bucket, it can never return to an unversioned state. You can, however, suspend versioning on that bucket.
     */
    enabled?: boolean;
}
