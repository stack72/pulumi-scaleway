// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Creates and manages Scaleway Container Registry.
// For more information see [the documentation](https://developers.scaleway.com/en/products/registry/api/).
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
// 		_, err := scaleway.NewRegistryNamespace(ctx, "main", &scaleway.RegistryNamespaceArgs{
// 			Description: pulumi.String("Main container registry"),
// 			IsPublic:    pulumi.Bool(false),
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
// Namespaces can be imported using the `{region}/{id}`, e.g. bash
//
// ```sh
//  $ pulumi import scaleway:index/registryNamespace:RegistryNamespace main fr-par/11111111-1111-1111-1111-111111111111
// ```
type RegistryNamespace struct {
	pulumi.CustomResourceState

	// The description of the namespace.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Endpoint reachable by Docker.
	Endpoint pulumi.StringOutput `pulumi:"endpoint"`
	// Whether the images stored in the namespace should be downloadable publicly (docker pull).
	IsPublic pulumi.BoolPtrOutput `pulumi:"isPublic"`
	// The unique name of the namespace.
	Name pulumi.StringOutput `pulumi:"name"`
	// The organization ID the namespace is associated with.
	OrganizationId pulumi.StringOutput `pulumi:"organizationId"`
	// `projectId`) The ID of the project the namespace is associated with.
	ProjectId pulumi.StringOutput `pulumi:"projectId"`
	// `region`). The region in which the namespace should be created.
	Region pulumi.StringOutput `pulumi:"region"`
}

// NewRegistryNamespace registers a new resource with the given unique name, arguments, and options.
func NewRegistryNamespace(ctx *pulumi.Context,
	name string, args *RegistryNamespaceArgs, opts ...pulumi.ResourceOption) (*RegistryNamespace, error) {
	if args == nil {
		args = &RegistryNamespaceArgs{}
	}

	var resource RegistryNamespace
	err := ctx.RegisterResource("scaleway:index/registryNamespace:RegistryNamespace", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRegistryNamespace gets an existing RegistryNamespace resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRegistryNamespace(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RegistryNamespaceState, opts ...pulumi.ResourceOption) (*RegistryNamespace, error) {
	var resource RegistryNamespace
	err := ctx.ReadResource("scaleway:index/registryNamespace:RegistryNamespace", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RegistryNamespace resources.
type registryNamespaceState struct {
	// The description of the namespace.
	Description *string `pulumi:"description"`
	// Endpoint reachable by Docker.
	Endpoint *string `pulumi:"endpoint"`
	// Whether the images stored in the namespace should be downloadable publicly (docker pull).
	IsPublic *bool `pulumi:"isPublic"`
	// The unique name of the namespace.
	Name *string `pulumi:"name"`
	// The organization ID the namespace is associated with.
	OrganizationId *string `pulumi:"organizationId"`
	// `projectId`) The ID of the project the namespace is associated with.
	ProjectId *string `pulumi:"projectId"`
	// `region`). The region in which the namespace should be created.
	Region *string `pulumi:"region"`
}

type RegistryNamespaceState struct {
	// The description of the namespace.
	Description pulumi.StringPtrInput
	// Endpoint reachable by Docker.
	Endpoint pulumi.StringPtrInput
	// Whether the images stored in the namespace should be downloadable publicly (docker pull).
	IsPublic pulumi.BoolPtrInput
	// The unique name of the namespace.
	Name pulumi.StringPtrInput
	// The organization ID the namespace is associated with.
	OrganizationId pulumi.StringPtrInput
	// `projectId`) The ID of the project the namespace is associated with.
	ProjectId pulumi.StringPtrInput
	// `region`). The region in which the namespace should be created.
	Region pulumi.StringPtrInput
}

func (RegistryNamespaceState) ElementType() reflect.Type {
	return reflect.TypeOf((*registryNamespaceState)(nil)).Elem()
}

type registryNamespaceArgs struct {
	// The description of the namespace.
	Description *string `pulumi:"description"`
	// Whether the images stored in the namespace should be downloadable publicly (docker pull).
	IsPublic *bool `pulumi:"isPublic"`
	// The unique name of the namespace.
	Name *string `pulumi:"name"`
	// `projectId`) The ID of the project the namespace is associated with.
	ProjectId *string `pulumi:"projectId"`
	// `region`). The region in which the namespace should be created.
	Region *string `pulumi:"region"`
}

// The set of arguments for constructing a RegistryNamespace resource.
type RegistryNamespaceArgs struct {
	// The description of the namespace.
	Description pulumi.StringPtrInput
	// Whether the images stored in the namespace should be downloadable publicly (docker pull).
	IsPublic pulumi.BoolPtrInput
	// The unique name of the namespace.
	Name pulumi.StringPtrInput
	// `projectId`) The ID of the project the namespace is associated with.
	ProjectId pulumi.StringPtrInput
	// `region`). The region in which the namespace should be created.
	Region pulumi.StringPtrInput
}

func (RegistryNamespaceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*registryNamespaceArgs)(nil)).Elem()
}

type RegistryNamespaceInput interface {
	pulumi.Input

	ToRegistryNamespaceOutput() RegistryNamespaceOutput
	ToRegistryNamespaceOutputWithContext(ctx context.Context) RegistryNamespaceOutput
}

func (*RegistryNamespace) ElementType() reflect.Type {
	return reflect.TypeOf((*RegistryNamespace)(nil))
}

func (i *RegistryNamespace) ToRegistryNamespaceOutput() RegistryNamespaceOutput {
	return i.ToRegistryNamespaceOutputWithContext(context.Background())
}

func (i *RegistryNamespace) ToRegistryNamespaceOutputWithContext(ctx context.Context) RegistryNamespaceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RegistryNamespaceOutput)
}

type RegistryNamespaceOutput struct{ *pulumi.OutputState }

func (RegistryNamespaceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RegistryNamespace)(nil))
}

func (o RegistryNamespaceOutput) ToRegistryNamespaceOutput() RegistryNamespaceOutput {
	return o
}

func (o RegistryNamespaceOutput) ToRegistryNamespaceOutputWithContext(ctx context.Context) RegistryNamespaceOutput {
	return o
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*RegistryNamespaceInput)(nil)).Elem(), &RegistryNamespace{})
	pulumi.RegisterOutputType(RegistryNamespaceOutput{})
}
