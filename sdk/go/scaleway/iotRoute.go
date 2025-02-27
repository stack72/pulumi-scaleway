// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type IotRoute struct {
	pulumi.CustomResourceState

	// The date and time of the creation of the IoT Route
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// Database Route parameters
	Database IotRouteDatabasePtrOutput `pulumi:"database"`
	// The ID of the route's hub
	HubId pulumi.StringOutput `pulumi:"hubId"`
	// The name of the route
	Name pulumi.StringOutput `pulumi:"name"`
	// The region you want to attach the resource to
	Region pulumi.StringOutput `pulumi:"region"`
	// Rest Route parameters
	Rest IotRouteRestPtrOutput `pulumi:"rest"`
	// S3 Route parameters
	S3 IotRouteS3PtrOutput `pulumi:"s3"`
	// The Topic the route subscribes to (wildcards allowed)
	Topic pulumi.StringOutput `pulumi:"topic"`
}

// NewIotRoute registers a new resource with the given unique name, arguments, and options.
func NewIotRoute(ctx *pulumi.Context,
	name string, args *IotRouteArgs, opts ...pulumi.ResourceOption) (*IotRoute, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.HubId == nil {
		return nil, errors.New("invalid value for required argument 'HubId'")
	}
	if args.Topic == nil {
		return nil, errors.New("invalid value for required argument 'Topic'")
	}
	var resource IotRoute
	err := ctx.RegisterResource("scaleway:index/iotRoute:IotRoute", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIotRoute gets an existing IotRoute resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIotRoute(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IotRouteState, opts ...pulumi.ResourceOption) (*IotRoute, error) {
	var resource IotRoute
	err := ctx.ReadResource("scaleway:index/iotRoute:IotRoute", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IotRoute resources.
type iotRouteState struct {
	// The date and time of the creation of the IoT Route
	CreatedAt *string `pulumi:"createdAt"`
	// Database Route parameters
	Database *IotRouteDatabase `pulumi:"database"`
	// The ID of the route's hub
	HubId *string `pulumi:"hubId"`
	// The name of the route
	Name *string `pulumi:"name"`
	// The region you want to attach the resource to
	Region *string `pulumi:"region"`
	// Rest Route parameters
	Rest *IotRouteRest `pulumi:"rest"`
	// S3 Route parameters
	S3 *IotRouteS3 `pulumi:"s3"`
	// The Topic the route subscribes to (wildcards allowed)
	Topic *string `pulumi:"topic"`
}

type IotRouteState struct {
	// The date and time of the creation of the IoT Route
	CreatedAt pulumi.StringPtrInput
	// Database Route parameters
	Database IotRouteDatabasePtrInput
	// The ID of the route's hub
	HubId pulumi.StringPtrInput
	// The name of the route
	Name pulumi.StringPtrInput
	// The region you want to attach the resource to
	Region pulumi.StringPtrInput
	// Rest Route parameters
	Rest IotRouteRestPtrInput
	// S3 Route parameters
	S3 IotRouteS3PtrInput
	// The Topic the route subscribes to (wildcards allowed)
	Topic pulumi.StringPtrInput
}

func (IotRouteState) ElementType() reflect.Type {
	return reflect.TypeOf((*iotRouteState)(nil)).Elem()
}

type iotRouteArgs struct {
	// Database Route parameters
	Database *IotRouteDatabase `pulumi:"database"`
	// The ID of the route's hub
	HubId string `pulumi:"hubId"`
	// The name of the route
	Name *string `pulumi:"name"`
	// The region you want to attach the resource to
	Region *string `pulumi:"region"`
	// Rest Route parameters
	Rest *IotRouteRest `pulumi:"rest"`
	// S3 Route parameters
	S3 *IotRouteS3 `pulumi:"s3"`
	// The Topic the route subscribes to (wildcards allowed)
	Topic string `pulumi:"topic"`
}

// The set of arguments for constructing a IotRoute resource.
type IotRouteArgs struct {
	// Database Route parameters
	Database IotRouteDatabasePtrInput
	// The ID of the route's hub
	HubId pulumi.StringInput
	// The name of the route
	Name pulumi.StringPtrInput
	// The region you want to attach the resource to
	Region pulumi.StringPtrInput
	// Rest Route parameters
	Rest IotRouteRestPtrInput
	// S3 Route parameters
	S3 IotRouteS3PtrInput
	// The Topic the route subscribes to (wildcards allowed)
	Topic pulumi.StringInput
}

func (IotRouteArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*iotRouteArgs)(nil)).Elem()
}

type IotRouteInput interface {
	pulumi.Input

	ToIotRouteOutput() IotRouteOutput
	ToIotRouteOutputWithContext(ctx context.Context) IotRouteOutput
}

func (*IotRoute) ElementType() reflect.Type {
	return reflect.TypeOf((*IotRoute)(nil))
}

func (i *IotRoute) ToIotRouteOutput() IotRouteOutput {
	return i.ToIotRouteOutputWithContext(context.Background())
}

func (i *IotRoute) ToIotRouteOutputWithContext(ctx context.Context) IotRouteOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IotRouteOutput)
}

type IotRouteOutput struct{ *pulumi.OutputState }

func (IotRouteOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IotRoute)(nil))
}

func (o IotRouteOutput) ToIotRouteOutput() IotRouteOutput {
	return o
}

func (o IotRouteOutput) ToIotRouteOutputWithContext(ctx context.Context) IotRouteOutput {
	return o
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*IotRouteInput)(nil)).Elem(), &IotRoute{})
	pulumi.RegisterOutputType(IotRouteOutput{})
}
