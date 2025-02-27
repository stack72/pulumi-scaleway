// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Creates and manages Scaleway Kubernetes cluster pools. For more information, see [the documentation](https://developers.scaleway.com/en/products/k8s/api/).
//
// ## Examples
//
// ### Basic
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-scaleway/sdk/go/scaleway"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		jack, err := scaleway.NewKubernetesCluster(ctx, "jack", &scaleway.KubernetesClusterArgs{
// 			Version: pulumi.String("1.19.4"),
// 			Cni:     pulumi.String("cilium"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = scaleway.NewKubernetesNodePool(ctx, "bill", &scaleway.KubernetesNodePoolArgs{
// 			ClusterId:        jack.ID(),
// 			NodeType:         pulumi.String("DEV1-M"),
// 			Size:             pulumi.Int(3),
// 			MinSize:          pulumi.Int(0),
// 			MaxSize:          pulumi.Int(10),
// 			Autoscaling:      pulumi.Bool(true),
// 			Autohealing:      pulumi.Bool(true),
// 			ContainerRuntime: pulumi.String("containerd"),
// 			PlacementGroupId: pulumi.String("1267e3fd-a51c-49ed-ad12-857092ee3a3d"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Kubernetes pools can be imported using the `{region}/{id}`, e.g. bash
//
// ```sh
//  $ pulumi import scaleway:index/kubernetesNodePool:KubernetesNodePool mypool fr-par/11111111-1111-1111-1111-111111111111
// ```
type KubernetesNodePool struct {
	pulumi.CustomResourceState

	// Enables the autohealing feature for this pool.
	Autohealing pulumi.BoolPtrOutput `pulumi:"autohealing"`
	// Enables the autoscaling feature for this pool.
	// > **Important:** When enabled, an update of the `size` will not be taken into account.
	Autoscaling pulumi.BoolPtrOutput `pulumi:"autoscaling"`
	// The ID of the Kubernetes cluster on which this pool will be created.
	ClusterId pulumi.StringOutput `pulumi:"clusterId"`
	// The container runtime of the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	ContainerRuntime pulumi.StringPtrOutput `pulumi:"containerRuntime"`
	// The creation date of the pool.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// The actual size of the pool
	CurrentSize pulumi.IntOutput `pulumi:"currentSize"`
	// The Kubelet arguments to be used by this pool
	KubeletArgs pulumi.StringMapOutput `pulumi:"kubeletArgs"`
	// The maximum size of the pool, used by the autoscaling feature.
	MaxSize pulumi.IntOutput `pulumi:"maxSize"`
	// The minimum size of the pool, used by the autoscaling feature.
	MinSize pulumi.IntPtrOutput `pulumi:"minSize"`
	// The name for the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The commercial type of the pool instances.
	// > **Important:** Updates to this field will recreate a new resource.
	NodeType pulumi.StringOutput `pulumi:"nodeType"`
	// (List of) The nodes in the default pool.
	Nodes KubernetesNodePoolNodeArrayOutput `pulumi:"nodes"`
	// The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
	// > **Important:** Updates to this field will recreate a new resource.
	PlacementGroupId pulumi.StringPtrOutput `pulumi:"placementGroupId"`
	// `region`) The region in which the pool should be created.
	Region pulumi.StringOutput `pulumi:"region"`
	// The size of the pool.
	// > **Important:** This field will only be used at creation if autoscaling is enabled.
	Size pulumi.IntOutput `pulumi:"size"`
	// The status of the node.
	Status pulumi.StringOutput `pulumi:"status"`
	// The tags associated with the pool.
	// > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
	Tags pulumi.StringArrayOutput `pulumi:"tags"`
	// The last update date of the pool.
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
	// The Pool upgrade policy
	UpgradePolicy KubernetesNodePoolUpgradePolicyOutput `pulumi:"upgradePolicy"`
	// The version of the pool.
	Version pulumi.StringOutput `pulumi:"version"`
	// Whether to wait for the pool to be ready.
	WaitForPoolReady pulumi.BoolPtrOutput `pulumi:"waitForPoolReady"`
	// `zone`) The zone in which the pool should be created.
	// > **Important:** Updates to this field will recreate a new resource.
	Zone pulumi.StringOutput `pulumi:"zone"`
}

// NewKubernetesNodePool registers a new resource with the given unique name, arguments, and options.
func NewKubernetesNodePool(ctx *pulumi.Context,
	name string, args *KubernetesNodePoolArgs, opts ...pulumi.ResourceOption) (*KubernetesNodePool, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ClusterId == nil {
		return nil, errors.New("invalid value for required argument 'ClusterId'")
	}
	if args.NodeType == nil {
		return nil, errors.New("invalid value for required argument 'NodeType'")
	}
	if args.Size == nil {
		return nil, errors.New("invalid value for required argument 'Size'")
	}
	var resource KubernetesNodePool
	err := ctx.RegisterResource("scaleway:index/kubernetesNodePool:KubernetesNodePool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetKubernetesNodePool gets an existing KubernetesNodePool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetKubernetesNodePool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *KubernetesNodePoolState, opts ...pulumi.ResourceOption) (*KubernetesNodePool, error) {
	var resource KubernetesNodePool
	err := ctx.ReadResource("scaleway:index/kubernetesNodePool:KubernetesNodePool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering KubernetesNodePool resources.
type kubernetesNodePoolState struct {
	// Enables the autohealing feature for this pool.
	Autohealing *bool `pulumi:"autohealing"`
	// Enables the autoscaling feature for this pool.
	// > **Important:** When enabled, an update of the `size` will not be taken into account.
	Autoscaling *bool `pulumi:"autoscaling"`
	// The ID of the Kubernetes cluster on which this pool will be created.
	ClusterId *string `pulumi:"clusterId"`
	// The container runtime of the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	ContainerRuntime *string `pulumi:"containerRuntime"`
	// The creation date of the pool.
	CreatedAt *string `pulumi:"createdAt"`
	// The actual size of the pool
	CurrentSize *int `pulumi:"currentSize"`
	// The Kubelet arguments to be used by this pool
	KubeletArgs map[string]string `pulumi:"kubeletArgs"`
	// The maximum size of the pool, used by the autoscaling feature.
	MaxSize *int `pulumi:"maxSize"`
	// The minimum size of the pool, used by the autoscaling feature.
	MinSize *int `pulumi:"minSize"`
	// The name for the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	Name *string `pulumi:"name"`
	// The commercial type of the pool instances.
	// > **Important:** Updates to this field will recreate a new resource.
	NodeType *string `pulumi:"nodeType"`
	// (List of) The nodes in the default pool.
	Nodes []KubernetesNodePoolNode `pulumi:"nodes"`
	// The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
	// > **Important:** Updates to this field will recreate a new resource.
	PlacementGroupId *string `pulumi:"placementGroupId"`
	// `region`) The region in which the pool should be created.
	Region *string `pulumi:"region"`
	// The size of the pool.
	// > **Important:** This field will only be used at creation if autoscaling is enabled.
	Size *int `pulumi:"size"`
	// The status of the node.
	Status *string `pulumi:"status"`
	// The tags associated with the pool.
	// > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
	Tags []string `pulumi:"tags"`
	// The last update date of the pool.
	UpdatedAt *string `pulumi:"updatedAt"`
	// The Pool upgrade policy
	UpgradePolicy *KubernetesNodePoolUpgradePolicy `pulumi:"upgradePolicy"`
	// The version of the pool.
	Version *string `pulumi:"version"`
	// Whether to wait for the pool to be ready.
	WaitForPoolReady *bool `pulumi:"waitForPoolReady"`
	// `zone`) The zone in which the pool should be created.
	// > **Important:** Updates to this field will recreate a new resource.
	Zone *string `pulumi:"zone"`
}

type KubernetesNodePoolState struct {
	// Enables the autohealing feature for this pool.
	Autohealing pulumi.BoolPtrInput
	// Enables the autoscaling feature for this pool.
	// > **Important:** When enabled, an update of the `size` will not be taken into account.
	Autoscaling pulumi.BoolPtrInput
	// The ID of the Kubernetes cluster on which this pool will be created.
	ClusterId pulumi.StringPtrInput
	// The container runtime of the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	ContainerRuntime pulumi.StringPtrInput
	// The creation date of the pool.
	CreatedAt pulumi.StringPtrInput
	// The actual size of the pool
	CurrentSize pulumi.IntPtrInput
	// The Kubelet arguments to be used by this pool
	KubeletArgs pulumi.StringMapInput
	// The maximum size of the pool, used by the autoscaling feature.
	MaxSize pulumi.IntPtrInput
	// The minimum size of the pool, used by the autoscaling feature.
	MinSize pulumi.IntPtrInput
	// The name for the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	Name pulumi.StringPtrInput
	// The commercial type of the pool instances.
	// > **Important:** Updates to this field will recreate a new resource.
	NodeType pulumi.StringPtrInput
	// (List of) The nodes in the default pool.
	Nodes KubernetesNodePoolNodeArrayInput
	// The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
	// > **Important:** Updates to this field will recreate a new resource.
	PlacementGroupId pulumi.StringPtrInput
	// `region`) The region in which the pool should be created.
	Region pulumi.StringPtrInput
	// The size of the pool.
	// > **Important:** This field will only be used at creation if autoscaling is enabled.
	Size pulumi.IntPtrInput
	// The status of the node.
	Status pulumi.StringPtrInput
	// The tags associated with the pool.
	// > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
	Tags pulumi.StringArrayInput
	// The last update date of the pool.
	UpdatedAt pulumi.StringPtrInput
	// The Pool upgrade policy
	UpgradePolicy KubernetesNodePoolUpgradePolicyPtrInput
	// The version of the pool.
	Version pulumi.StringPtrInput
	// Whether to wait for the pool to be ready.
	WaitForPoolReady pulumi.BoolPtrInput
	// `zone`) The zone in which the pool should be created.
	// > **Important:** Updates to this field will recreate a new resource.
	Zone pulumi.StringPtrInput
}

func (KubernetesNodePoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*kubernetesNodePoolState)(nil)).Elem()
}

type kubernetesNodePoolArgs struct {
	// Enables the autohealing feature for this pool.
	Autohealing *bool `pulumi:"autohealing"`
	// Enables the autoscaling feature for this pool.
	// > **Important:** When enabled, an update of the `size` will not be taken into account.
	Autoscaling *bool `pulumi:"autoscaling"`
	// The ID of the Kubernetes cluster on which this pool will be created.
	ClusterId string `pulumi:"clusterId"`
	// The container runtime of the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	ContainerRuntime *string `pulumi:"containerRuntime"`
	// The Kubelet arguments to be used by this pool
	KubeletArgs map[string]string `pulumi:"kubeletArgs"`
	// The maximum size of the pool, used by the autoscaling feature.
	MaxSize *int `pulumi:"maxSize"`
	// The minimum size of the pool, used by the autoscaling feature.
	MinSize *int `pulumi:"minSize"`
	// The name for the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	Name *string `pulumi:"name"`
	// The commercial type of the pool instances.
	// > **Important:** Updates to this field will recreate a new resource.
	NodeType string `pulumi:"nodeType"`
	// The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
	// > **Important:** Updates to this field will recreate a new resource.
	PlacementGroupId *string `pulumi:"placementGroupId"`
	// `region`) The region in which the pool should be created.
	Region *string `pulumi:"region"`
	// The size of the pool.
	// > **Important:** This field will only be used at creation if autoscaling is enabled.
	Size int `pulumi:"size"`
	// The tags associated with the pool.
	// > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
	Tags []string `pulumi:"tags"`
	// The Pool upgrade policy
	UpgradePolicy *KubernetesNodePoolUpgradePolicy `pulumi:"upgradePolicy"`
	// Whether to wait for the pool to be ready.
	WaitForPoolReady *bool `pulumi:"waitForPoolReady"`
	// `zone`) The zone in which the pool should be created.
	// > **Important:** Updates to this field will recreate a new resource.
	Zone *string `pulumi:"zone"`
}

// The set of arguments for constructing a KubernetesNodePool resource.
type KubernetesNodePoolArgs struct {
	// Enables the autohealing feature for this pool.
	Autohealing pulumi.BoolPtrInput
	// Enables the autoscaling feature for this pool.
	// > **Important:** When enabled, an update of the `size` will not be taken into account.
	Autoscaling pulumi.BoolPtrInput
	// The ID of the Kubernetes cluster on which this pool will be created.
	ClusterId pulumi.StringInput
	// The container runtime of the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	ContainerRuntime pulumi.StringPtrInput
	// The Kubelet arguments to be used by this pool
	KubeletArgs pulumi.StringMapInput
	// The maximum size of the pool, used by the autoscaling feature.
	MaxSize pulumi.IntPtrInput
	// The minimum size of the pool, used by the autoscaling feature.
	MinSize pulumi.IntPtrInput
	// The name for the pool.
	// > **Important:** Updates to this field will recreate a new resource.
	Name pulumi.StringPtrInput
	// The commercial type of the pool instances.
	// > **Important:** Updates to this field will recreate a new resource.
	NodeType pulumi.StringInput
	// The [placement group](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653) the nodes of the pool will be attached to.
	// > **Important:** Updates to this field will recreate a new resource.
	PlacementGroupId pulumi.StringPtrInput
	// `region`) The region in which the pool should be created.
	Region pulumi.StringPtrInput
	// The size of the pool.
	// > **Important:** This field will only be used at creation if autoscaling is enabled.
	Size pulumi.IntInput
	// The tags associated with the pool.
	// > Note: As mentionned in [this document](https://github.com/scaleway/scaleway-cloud-controller-manager/blob/master/docs/tags.md#taints), taints of a pool's nodes are applied using tags. (Example: "taint=taintName=taineValue:Effect")
	Tags pulumi.StringArrayInput
	// The Pool upgrade policy
	UpgradePolicy KubernetesNodePoolUpgradePolicyPtrInput
	// Whether to wait for the pool to be ready.
	WaitForPoolReady pulumi.BoolPtrInput
	// `zone`) The zone in which the pool should be created.
	// > **Important:** Updates to this field will recreate a new resource.
	Zone pulumi.StringPtrInput
}

func (KubernetesNodePoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*kubernetesNodePoolArgs)(nil)).Elem()
}

type KubernetesNodePoolInput interface {
	pulumi.Input

	ToKubernetesNodePoolOutput() KubernetesNodePoolOutput
	ToKubernetesNodePoolOutputWithContext(ctx context.Context) KubernetesNodePoolOutput
}

func (*KubernetesNodePool) ElementType() reflect.Type {
	return reflect.TypeOf((*KubernetesNodePool)(nil))
}

func (i *KubernetesNodePool) ToKubernetesNodePoolOutput() KubernetesNodePoolOutput {
	return i.ToKubernetesNodePoolOutputWithContext(context.Background())
}

func (i *KubernetesNodePool) ToKubernetesNodePoolOutputWithContext(ctx context.Context) KubernetesNodePoolOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KubernetesNodePoolOutput)
}

type KubernetesNodePoolOutput struct{ *pulumi.OutputState }

func (KubernetesNodePoolOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*KubernetesNodePool)(nil))
}

func (o KubernetesNodePoolOutput) ToKubernetesNodePoolOutput() KubernetesNodePoolOutput {
	return o
}

func (o KubernetesNodePoolOutput) ToKubernetesNodePoolOutputWithContext(ctx context.Context) KubernetesNodePoolOutput {
	return o
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*KubernetesNodePoolInput)(nil)).Elem(), &KubernetesNodePool{})
	pulumi.RegisterOutputType(KubernetesNodePoolOutput{})
}
