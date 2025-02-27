// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Creates and manages Scaleway Compute Instance IPs. For more information, see [the documentation](https://developers.scaleway.com/en/products/instance/api/#ips-268151).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 *
 * const serverIp = new scaleway.InstanceIp("server_ip", {});
 * ```
 *
 * ## Import
 *
 * IPs can be imported using the `{zone}/{id}`, e.g. bash
 *
 * ```sh
 *  $ pulumi import scaleway:index/instanceIp:InstanceIp server_ip fr-par-1/11111111-1111-1111-1111-111111111111
 * ```
 */
export class InstanceIp extends pulumi.CustomResource {
    /**
     * Get an existing InstanceIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceIpState, opts?: pulumi.CustomResourceOptions): InstanceIp {
        return new InstanceIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/instanceIp:InstanceIp';

    /**
     * Returns true if the given object is an instance of InstanceIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstanceIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstanceIp.__pulumiType;
    }

    /**
     * The IP address.
     */
    public /*out*/ readonly address!: pulumi.Output<string>;
    /**
     * The organization ID the IP is associated with.
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * `projectId`) The ID of the project the IP is associated with.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The reverse dns attached to this IP
     */
    public /*out*/ readonly reverse!: pulumi.Output<string>;
    /**
     * The server associated with this IP
     */
    public /*out*/ readonly serverId!: pulumi.Output<string>;
    /**
     * `zone`) The zone in which the IP should be reserved.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a InstanceIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InstanceIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstanceIpArgs | InstanceIpState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InstanceIpState | undefined;
            inputs["address"] = state ? state.address : undefined;
            inputs["organizationId"] = state ? state.organizationId : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["reverse"] = state ? state.reverse : undefined;
            inputs["serverId"] = state ? state.serverId : undefined;
            inputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as InstanceIpArgs | undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["address"] = undefined /*out*/;
            inputs["organizationId"] = undefined /*out*/;
            inputs["reverse"] = undefined /*out*/;
            inputs["serverId"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(InstanceIp.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InstanceIp resources.
 */
export interface InstanceIpState {
    /**
     * The IP address.
     */
    address?: pulumi.Input<string>;
    /**
     * The organization ID the IP is associated with.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * `projectId`) The ID of the project the IP is associated with.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The reverse dns attached to this IP
     */
    reverse?: pulumi.Input<string>;
    /**
     * The server associated with this IP
     */
    serverId?: pulumi.Input<string>;
    /**
     * `zone`) The zone in which the IP should be reserved.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InstanceIp resource.
 */
export interface InstanceIpArgs {
    /**
     * `projectId`) The ID of the project the IP is associated with.
     */
    projectId?: pulumi.Input<string>;
    /**
     * `zone`) The zone in which the IP should be reserved.
     */
    zone?: pulumi.Input<string>;
}
