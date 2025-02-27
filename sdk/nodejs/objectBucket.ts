// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Creates and manages Scaleway object storage buckets.
 * For more information, see [the documentation](https://www.scaleway.com/en/docs/object-storage-feature/).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 *
 * const someBucket = new scaleway.ObjectBucket("some_bucket", {
 *     acl: "private",
 *     tags: {
 *         key: "value",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Buckets can be imported using the `{region}/{bucketName}` identifier, e.g. bash
 *
 * ```sh
 *  $ pulumi import scaleway:index/objectBucket:ObjectBucket some_bucket fr-par/some-bucket
 * ```
 */
export class ObjectBucket extends pulumi.CustomResource {
    /**
     * Get an existing ObjectBucket resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectBucketState, opts?: pulumi.CustomResourceOptions): ObjectBucket {
        return new ObjectBucket(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/objectBucket:ObjectBucket';

    /**
     * Returns true if the given object is an instance of ObjectBucket.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectBucket {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectBucket.__pulumiType;
    }

    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl_overview.html#canned-acl) you want to apply to the bucket.
     */
    public readonly acl!: pulumi.Output<string | undefined>;
    /**
     * A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
     */
    public readonly corsRules!: pulumi.Output<outputs.ObjectBucketCorsRule[] | undefined>;
    /**
     * The endpoint URL of the bucket
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The name of the bucket.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The [region](https://developers.scaleway.com/en/quickstart/#region-definition) in which the bucket should be created.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * A list of tags (key / value) for the bucket.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
     */
    public readonly versioning!: pulumi.Output<outputs.ObjectBucketVersioning>;

    /**
     * Create a ObjectBucket resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectBucketArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectBucketArgs | ObjectBucketState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectBucketState | undefined;
            inputs["acl"] = state ? state.acl : undefined;
            inputs["corsRules"] = state ? state.corsRules : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["versioning"] = state ? state.versioning : undefined;
        } else {
            const args = argsOrState as ObjectBucketArgs | undefined;
            inputs["acl"] = args ? args.acl : undefined;
            inputs["corsRules"] = args ? args.corsRules : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["versioning"] = args ? args.versioning : undefined;
            inputs["endpoint"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(ObjectBucket.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ObjectBucket resources.
 */
export interface ObjectBucketState {
    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl_overview.html#canned-acl) you want to apply to the bucket.
     */
    acl?: pulumi.Input<string>;
    /**
     * A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
     */
    corsRules?: pulumi.Input<pulumi.Input<inputs.ObjectBucketCorsRule>[]>;
    /**
     * The endpoint URL of the bucket
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The name of the bucket.
     */
    name?: pulumi.Input<string>;
    /**
     * The [region](https://developers.scaleway.com/en/quickstart/#region-definition) in which the bucket should be created.
     */
    region?: pulumi.Input<string>;
    /**
     * A list of tags (key / value) for the bucket.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
     */
    versioning?: pulumi.Input<inputs.ObjectBucketVersioning>;
}

/**
 * The set of arguments for constructing a ObjectBucket resource.
 */
export interface ObjectBucketArgs {
    /**
     * The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl_overview.html#canned-acl) you want to apply to the bucket.
     */
    acl?: pulumi.Input<string>;
    /**
     * A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
     */
    corsRules?: pulumi.Input<pulumi.Input<inputs.ObjectBucketCorsRule>[]>;
    /**
     * The name of the bucket.
     */
    name?: pulumi.Input<string>;
    /**
     * The [region](https://developers.scaleway.com/en/quickstart/#region-definition) in which the bucket should be created.
     */
    region?: pulumi.Input<string>;
    /**
     * A list of tags (key / value) for the bucket.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
     */
    versioning?: pulumi.Input<inputs.ObjectBucketVersioning>;
}
