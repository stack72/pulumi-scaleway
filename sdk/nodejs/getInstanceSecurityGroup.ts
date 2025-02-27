// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Gets information about a Security Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 *
 * // Get info by security group id
 * const myKey = pulumi.output(scaleway.getInstanceSecurityGroup({
 *     securityGroupId: "11111111-1111-1111-1111-111111111111",
 * }));
 * ```
 */
export function getInstanceSecurityGroup(args?: GetInstanceSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceSecurityGroupResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("scaleway:index/getInstanceSecurityGroup:getInstanceSecurityGroup", {
        "name": args.name,
        "securityGroupId": args.securityGroupId,
        "zone": args.zone,
    }, opts);
}

/**
 * A collection of arguments for invoking getInstanceSecurityGroup.
 */
export interface GetInstanceSecurityGroupArgs {
    /**
     * The security group name. Only one of `name` and `securityGroupId` should be specified.
     */
    name?: string;
    /**
     * The security group id. Only one of `name` and `securityGroupId` should be specified.
     */
    securityGroupId?: string;
    /**
     * `zone`) The zone in which the security group exists.
     */
    zone?: string;
}

/**
 * A collection of values returned by getInstanceSecurityGroup.
 */
export interface GetInstanceSecurityGroupResult {
    readonly description: string;
    readonly enableDefaultSecurity: boolean;
    readonly externalRules: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The default policy on incoming traffic. Possible values are: `accept` or `drop`.
     */
    readonly inboundDefaultPolicy: string;
    /**
     * A list of inbound rule to add to the security group. (Structure is documented below.)
     */
    readonly inboundRules: outputs.GetInstanceSecurityGroupInboundRule[];
    readonly name?: string;
    /**
     * The ID of the organization the security group is associated with.
     */
    readonly organizationId: string;
    /**
     * The default policy on outgoing traffic. Possible values are: `accept` or `drop`.
     */
    readonly outboundDefaultPolicy: string;
    /**
     * A list of outbound rule to add to the security group. (Structure is documented below.)
     */
    readonly outboundRules: outputs.GetInstanceSecurityGroupOutboundRule[];
    /**
     * The ID of the project the security group is associated with.
     */
    readonly projectId: string;
    readonly securityGroupId?: string;
    readonly stateful: boolean;
    readonly zone?: string;
}

export function getInstanceSecurityGroupOutput(args?: GetInstanceSecurityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstanceSecurityGroupResult> {
    return pulumi.output(args).apply(a => getInstanceSecurityGroup(a, opts))
}

/**
 * A collection of arguments for invoking getInstanceSecurityGroup.
 */
export interface GetInstanceSecurityGroupOutputArgs {
    /**
     * The security group name. Only one of `name` and `securityGroupId` should be specified.
     */
    name?: pulumi.Input<string>;
    /**
     * The security group id. Only one of `name` and `securityGroupId` should be specified.
     */
    securityGroupId?: pulumi.Input<string>;
    /**
     * `zone`) The zone in which the security group exists.
     */
    zone?: pulumi.Input<string>;
}
