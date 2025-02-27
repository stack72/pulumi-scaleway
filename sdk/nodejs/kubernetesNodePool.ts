// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Creates and manages Scaleway Kubernetes cluster pools. For more information, see [the documentation](https://developers.scaleway.com/en/products/k8s/api/).
 *
 * ## Examples
 *
 * ### Basic
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 *
 * const jack = new scaleway.KubernetesCluster("jack", {
 *     version: "1.19.4",
 *     cni: "cilium",
 * });
 * const bill = new scaleway.KubernetesNodePool("bill", {
 *     clusterId: jack.id,
 *     nodeType: "DEV1-M",
 *     size: 3,
 *     minSize: 0,
 *     maxSize: 10,
 *     autoscaling: true,
 *     autohealing: true,
 *     containerRuntime: "containerd",
 *     placementGroupId: "1267e3fd-a51c-49ed-ad12-857092ee3a3d",
 * });
 * ```
 *
 * ## Import
 *
 * Kubernetes pools can be imported using the `{region}/{id}`, e.g. bash
 *
 * ```sh
 *  $ pulumi import scaleway:index/kubernetesNodePool:KubernetesNodePool mypool fr-par/11111111-1111-1111-1111-111111111111
 * ```
 */
export class KubernetesNodePool extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesNodePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesNodePoolState, opts?: pulumi.CustomResourceOptions): KubernetesNodePool {
        return new KubernetesNodePool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/kubernetesNodePool:KubernetesNodePool';

    /**
     * Returns true if the given object is an instance of KubernetesNodePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesNodePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesNodePool.__pulumiType;
    }

    /**
     * Enables the autohealing feature for this pool.
     */
    public readonly autohealing!: pulumi.Output<boolean | undefined>;
    /**
     * Enables the autoscaling feature for this pool.
     * > **Important:** When enabled, an update of the `size` will not be taken into account.
     */
    public readonly autoscaling!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Kubernetes cluster on which this pool will be created.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * The container runtime of the pool.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    public readonly containerRuntime!: pulumi.Output<string | undefined>;
    /**
     * The creation date of the pool.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The actual size of the pool
     */
    public /*out*/ readonly currentSize!: pulumi.Output<number>;
    /**
     * The Kubelet arguments to be used by this pool
     */
    public readonly kubeletArgs!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The maximum size of the pool, used by the autoscaling feature.
     */
    public readonly maxSize!: pulumi.Output<number>;
    /**
     * The minimum size of the pool, used by the autoscaling feature.
     */
    public readonly minSize!: pulumi.Output<number | undefined>;
    /**
     * The name for the pool.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The commercial type of the pool instances.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    public readonly nodeType!: pulumi.Output<string>;
    /**
     * (List of) The nodes in the default pool.
     */
    public /*out*/ readonly nodes!: pulumi.Output<outputs.KubernetesNodePoolNode[]>;
    /**
     * The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    public readonly placementGroupId!: pulumi.Output<string | undefined>;
    /**
     * `region`) The region in which the pool should be created.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The size of the pool.
     * > **Important:** This field will only be used at creation if autoscaling is enabled.
     */
    public readonly size!: pulumi.Output<number>;
    /**
     * The status of the node.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The tags associated with the pool.
     * > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The last update date of the pool.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The Pool upgrade policy
     */
    public readonly upgradePolicy!: pulumi.Output<outputs.KubernetesNodePoolUpgradePolicy>;
    /**
     * The version of the pool.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;
    /**
     * Whether to wait for the pool to be ready.
     */
    public readonly waitForPoolReady!: pulumi.Output<boolean | undefined>;
    /**
     * `zone`) The zone in which the pool should be created.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a KubernetesNodePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesNodePoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesNodePoolArgs | KubernetesNodePoolState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KubernetesNodePoolState | undefined;
            inputs["autohealing"] = state ? state.autohealing : undefined;
            inputs["autoscaling"] = state ? state.autoscaling : undefined;
            inputs["clusterId"] = state ? state.clusterId : undefined;
            inputs["containerRuntime"] = state ? state.containerRuntime : undefined;
            inputs["createdAt"] = state ? state.createdAt : undefined;
            inputs["currentSize"] = state ? state.currentSize : undefined;
            inputs["kubeletArgs"] = state ? state.kubeletArgs : undefined;
            inputs["maxSize"] = state ? state.maxSize : undefined;
            inputs["minSize"] = state ? state.minSize : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodeType"] = state ? state.nodeType : undefined;
            inputs["nodes"] = state ? state.nodes : undefined;
            inputs["placementGroupId"] = state ? state.placementGroupId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["updatedAt"] = state ? state.updatedAt : undefined;
            inputs["upgradePolicy"] = state ? state.upgradePolicy : undefined;
            inputs["version"] = state ? state.version : undefined;
            inputs["waitForPoolReady"] = state ? state.waitForPoolReady : undefined;
            inputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as KubernetesNodePoolArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.nodeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeType'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            inputs["autohealing"] = args ? args.autohealing : undefined;
            inputs["autoscaling"] = args ? args.autoscaling : undefined;
            inputs["clusterId"] = args ? args.clusterId : undefined;
            inputs["containerRuntime"] = args ? args.containerRuntime : undefined;
            inputs["kubeletArgs"] = args ? args.kubeletArgs : undefined;
            inputs["maxSize"] = args ? args.maxSize : undefined;
            inputs["minSize"] = args ? args.minSize : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["nodeType"] = args ? args.nodeType : undefined;
            inputs["placementGroupId"] = args ? args.placementGroupId : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["upgradePolicy"] = args ? args.upgradePolicy : undefined;
            inputs["waitForPoolReady"] = args ? args.waitForPoolReady : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["createdAt"] = undefined /*out*/;
            inputs["currentSize"] = undefined /*out*/;
            inputs["nodes"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(KubernetesNodePool.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KubernetesNodePool resources.
 */
export interface KubernetesNodePoolState {
    /**
     * Enables the autohealing feature for this pool.
     */
    autohealing?: pulumi.Input<boolean>;
    /**
     * Enables the autoscaling feature for this pool.
     * > **Important:** When enabled, an update of the `size` will not be taken into account.
     */
    autoscaling?: pulumi.Input<boolean>;
    /**
     * The ID of the Kubernetes cluster on which this pool will be created.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * The container runtime of the pool.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    containerRuntime?: pulumi.Input<string>;
    /**
     * The creation date of the pool.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The actual size of the pool
     */
    currentSize?: pulumi.Input<number>;
    /**
     * The Kubelet arguments to be used by this pool
     */
    kubeletArgs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The maximum size of the pool, used by the autoscaling feature.
     */
    maxSize?: pulumi.Input<number>;
    /**
     * The minimum size of the pool, used by the autoscaling feature.
     */
    minSize?: pulumi.Input<number>;
    /**
     * The name for the pool.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The commercial type of the pool instances.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    nodeType?: pulumi.Input<string>;
    /**
     * (List of) The nodes in the default pool.
     */
    nodes?: pulumi.Input<pulumi.Input<inputs.KubernetesNodePoolNode>[]>;
    /**
     * The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    placementGroupId?: pulumi.Input<string>;
    /**
     * `region`) The region in which the pool should be created.
     */
    region?: pulumi.Input<string>;
    /**
     * The size of the pool.
     * > **Important:** This field will only be used at creation if autoscaling is enabled.
     */
    size?: pulumi.Input<number>;
    /**
     * The status of the node.
     */
    status?: pulumi.Input<string>;
    /**
     * The tags associated with the pool.
     * > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The last update date of the pool.
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The Pool upgrade policy
     */
    upgradePolicy?: pulumi.Input<inputs.KubernetesNodePoolUpgradePolicy>;
    /**
     * The version of the pool.
     */
    version?: pulumi.Input<string>;
    /**
     * Whether to wait for the pool to be ready.
     */
    waitForPoolReady?: pulumi.Input<boolean>;
    /**
     * `zone`) The zone in which the pool should be created.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KubernetesNodePool resource.
 */
export interface KubernetesNodePoolArgs {
    /**
     * Enables the autohealing feature for this pool.
     */
    autohealing?: pulumi.Input<boolean>;
    /**
     * Enables the autoscaling feature for this pool.
     * > **Important:** When enabled, an update of the `size` will not be taken into account.
     */
    autoscaling?: pulumi.Input<boolean>;
    /**
     * The ID of the Kubernetes cluster on which this pool will be created.
     */
    clusterId: pulumi.Input<string>;
    /**
     * The container runtime of the pool.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    containerRuntime?: pulumi.Input<string>;
    /**
     * The Kubelet arguments to be used by this pool
     */
    kubeletArgs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The maximum size of the pool, used by the autoscaling feature.
     */
    maxSize?: pulumi.Input<number>;
    /**
     * The minimum size of the pool, used by the autoscaling feature.
     */
    minSize?: pulumi.Input<number>;
    /**
     * The name for the pool.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The commercial type of the pool instances.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    nodeType: pulumi.Input<string>;
    /**
     * The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    placementGroupId?: pulumi.Input<string>;
    /**
     * `region`) The region in which the pool should be created.
     */
    region?: pulumi.Input<string>;
    /**
     * The size of the pool.
     * > **Important:** This field will only be used at creation if autoscaling is enabled.
     */
    size: pulumi.Input<number>;
    /**
     * The tags associated with the pool.
     * > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Pool upgrade policy
     */
    upgradePolicy?: pulumi.Input<inputs.KubernetesNodePoolUpgradePolicy>;
    /**
     * Whether to wait for the pool to be ready.
     */
    waitForPoolReady?: pulumi.Input<boolean>;
    /**
     * `zone`) The zone in which the pool should be created.
     * > **Important:** Updates to this field will recreate a new resource.
     */
    zone?: pulumi.Input<string>;
}
