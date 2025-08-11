import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase! Your sweet treats are on their way.
          </p>

          {/* Order Details */}
          <Card className="text-left mb-8 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Order Number:</span>
                <span className="font-mono font-semibold">{orderData.orderId}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Items Ordered:</h4>
                {orderData.items?.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between font-semibold text-lg pt-4 border-t border-border">
                <span>Total Paid:</span>
                <span className="text-primary">${orderData.total?.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="text-left mb-8">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">Confirmation Email</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an order confirmation email within the next few minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Package className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">Order Preparation</h4>
                  <p className="text-sm text-muted-foreground">
                    Our confectioners will carefully prepare your order with love and attention.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Truck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">Shipping & Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Your order will be shipped within 1-2 business days and delivered fresh to your door.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-6 bg-secondary rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Need help with your order?</h3>
            <p className="text-muted-foreground text-sm">
              Contact our customer service team at{' '}
              <a href="mailto:support@sweetdelights.com" className="text-primary hover:underline">
                support@sweetdelights.com
              </a>{' '}
              or call{' '}
              <a href="tel:+15551234567" className="text-primary hover:underline">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;