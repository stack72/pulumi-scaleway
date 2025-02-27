// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Creates and manages Scaleway Load-Balancers IPs.
 * For more information, see [the documentation](https://developers.scaleway.com/en/products/lb/zoned_api).
 *
 * ## Examples
 *
 * ### Basic
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 *
 * const ip = new scaleway.LoadbalancerIp("ip", {
 *     reverse: "my-reverse.com",
 * });
 * ```
 *
 * ## Import
 *
 * IPs can be imported using the `{zone}/{id}`, e.g. bash
 *
 * ```sh
 *  $ pulumi import scaleway:index/loadbalancerIp:LoadbalancerIp ip01 fr-par-1/11111111-1111-1111-1111-111111111111
 * ```
 */
export class LoadbalancerIp extends pulumi.CustomResource {
    /**
     * Get an existing LoadbalancerIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadbalancerIpState, opts?: pulumi.CustomResourceOptions): LoadbalancerIp {
        return new LoadbalancerIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/loadbalancerIp:LoadbalancerIp';

    /**
     * Returns true if the given object is an instance of LoadbalancerIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadbalancerIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadbalancerIp.__pulumiType;
    }

    /**
     * The IP Address
     */
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    /**
     * The associated load-balance ID if any
     */
    public /*out*/ readonly lbId!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The region of the resource
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * The reverse domain associated with this IP.
     */
    public readonly reverse!: pulumi.Output<string>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a LoadbalancerIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LoadbalancerIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadbalancerIpArgs | LoadbalancerIpState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadbalancerIpState | undefined;
            inputs["ipAddress"] = state ? state.ipAddress : undefined;
            inputs["lbId"] = state ? state.lbId : undefined;
            inputs["organizationId"] = state ? state.organizationId : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["reverse"] = state ? state.reverse : undefined;
            inputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as LoadbalancerIpArgs | undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["reverse"] = args ? args.reverse : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["ipAddress"] = undefined /*out*/;
            inputs["lbId"] = undefined /*out*/;
            inputs["organizationId"] = undefined /*out*/;
            inputs["region"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(LoadbalancerIp.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LoadbalancerIp resources.
 */
export interface LoadbalancerIpState {
    /**
     * The IP Address
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The associated load-balance ID if any
     */
    lbId?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region of the resource
     */
    region?: pulumi.Input<string>;
    /**
     * The reverse domain associated with this IP.
     */
    reverse?: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadbalancerIp resource.
 */
export interface LoadbalancerIpArgs {
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The reverse domain associated with this IP.
     */
    reverse?: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}
