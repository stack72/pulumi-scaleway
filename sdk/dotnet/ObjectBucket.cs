// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Scaleway
{
    /// <summary>
    /// Creates and manages Scaleway object storage buckets.
    /// For more information, see [the documentation](https://www.scaleway.com/en/docs/object-storage-feature/).
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Scaleway = Pulumi.Scaleway;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var someBucket = new Scaleway.ObjectBucket("someBucket", new Scaleway.ObjectBucketArgs
    ///         {
    ///             Acl = "private",
    ///             Tags = 
    ///             {
    ///                 { "key", "value" },
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ## Import
    /// 
    /// Buckets can be imported using the `{region}/{bucketName}` identifier, e.g. bash
    /// 
    /// ```sh
    ///  $ pulumi import scaleway:index/objectBucket:ObjectBucket some_bucket fr-par/some-bucket
    /// ```
    /// </summary>
    [ScalewayResourceType("scaleway:index/objectBucket:ObjectBucket")]
    public partial class ObjectBucket : Pulumi.CustomResource
    {
        /// <summary>
        /// The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl_overview.html#canned-acl) you want to apply to the bucket.
        /// </summary>
        [Output("acl")]
        public Output<string?> Acl { get; private set; } = null!;

        /// <summary>
        /// A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
        /// </summary>
        [Output("corsRules")]
        public Output<ImmutableArray<Outputs.ObjectBucketCorsRule>> CorsRules { get; private set; } = null!;

        /// <summary>
        /// The endpoint URL of the bucket
        /// </summary>
        [Output("endpoint")]
        public Output<string> Endpoint { get; private set; } = null!;

        /// <summary>
        /// The name of the bucket.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The [region](https://developers.scaleway.com/en/quickstart/#region-definition) in which the bucket should be created.
        /// </summary>
        [Output("region")]
        public Output<string> Region { get; private set; } = null!;

        /// <summary>
        /// A list of tags (key / value) for the bucket.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
        /// </summary>
        [Output("versioning")]
        public Output<Outputs.ObjectBucketVersioning> Versioning { get; private set; } = null!;


        /// <summary>
        /// Create a ObjectBucket resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ObjectBucket(string name, ObjectBucketArgs? args = null, CustomResourceOptions? options = null)
            : base("scaleway:index/objectBucket:ObjectBucket", name, args ?? new ObjectBucketArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ObjectBucket(string name, Input<string> id, ObjectBucketState? state = null, CustomResourceOptions? options = null)
            : base("scaleway:index/objectBucket:ObjectBucket", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ObjectBucket resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ObjectBucket Get(string name, Input<string> id, ObjectBucketState? state = null, CustomResourceOptions? options = null)
        {
            return new ObjectBucket(name, id, state, options);
        }
    }

    public sealed class ObjectBucketArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl_overview.html#canned-acl) you want to apply to the bucket.
        /// </summary>
        [Input("acl")]
        public Input<string>? Acl { get; set; }

        [Input("corsRules")]
        private InputList<Inputs.ObjectBucketCorsRuleArgs>? _corsRules;

        /// <summary>
        /// A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
        /// </summary>
        public InputList<Inputs.ObjectBucketCorsRuleArgs> CorsRules
        {
            get => _corsRules ?? (_corsRules = new InputList<Inputs.ObjectBucketCorsRuleArgs>());
            set => _corsRules = value;
        }

        /// <summary>
        /// The name of the bucket.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The [region](https://developers.scaleway.com/en/quickstart/#region-definition) in which the bucket should be created.
        /// </summary>
        [Input("region")]
        public Input<string>? Region { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A list of tags (key / value) for the bucket.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
        /// </summary>
        [Input("versioning")]
        public Input<Inputs.ObjectBucketVersioningArgs>? Versioning { get; set; }

        public ObjectBucketArgs()
        {
        }
    }

    public sealed class ObjectBucketState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl_overview.html#canned-acl) you want to apply to the bucket.
        /// </summary>
        [Input("acl")]
        public Input<string>? Acl { get; set; }

        [Input("corsRules")]
        private InputList<Inputs.ObjectBucketCorsRuleGetArgs>? _corsRules;

        /// <summary>
        /// A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
        /// </summary>
        public InputList<Inputs.ObjectBucketCorsRuleGetArgs> CorsRules
        {
            get => _corsRules ?? (_corsRules = new InputList<Inputs.ObjectBucketCorsRuleGetArgs>());
            set => _corsRules = value;
        }

        /// <summary>
        /// The endpoint URL of the bucket
        /// </summary>
        [Input("endpoint")]
        public Input<string>? Endpoint { get; set; }

        /// <summary>
        /// The name of the bucket.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The [region](https://developers.scaleway.com/en/quickstart/#region-definition) in which the bucket should be created.
        /// </summary>
        [Input("region")]
        public Input<string>? Region { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A list of tags (key / value) for the bucket.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
        /// </summary>
        [Input("versioning")]
        public Input<Inputs.ObjectBucketVersioningGetArgs>? Versioning { get; set; }

        public ObjectBucketState()
        {
        }
    }
}
