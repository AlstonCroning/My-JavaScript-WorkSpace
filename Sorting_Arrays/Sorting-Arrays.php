<!doctype html>

<html lang="en">
	<head>
		<title>practice</title>
	</head>
	<body>
	<script type="text/javascript">

			
			var x = [1,3,5],
				y = [2,4,6],
				k = [],
				l = [],
				m = [];

			for(var i = 0; i < x.length; i++)
			{
				for(var j = 0; j < y.length; j++)
				{
					if( i == j )
					{
						k[i] = x[i];
					}
				}
			}

			var a = 0;
			
			for(var i = x.length; i < (x.length+y.length); i++)
			{
				for(var j = 0; j < 5; j++)
				{
					if(a == j)
					{
						k[i] = y[j];
					}
				}
				a++;				
			}
			console.log(k);

			var i = 0;
			var previous_index = 0;
			var previous_data = 0;
			var current_data = 0;
			var next_index = 0;
			var next_data = 0;
			var storedata = 0;			
			var count = 0;

			while(count < 3)
			{
				for(i = 0; i < k.length; i++)
				{
					previous_index = i - 1;
					previous_data = k[previous_index];
					current_data
					next_index = i + 1;
					next_data = k[next_index];
					
					if( previous_data > k[i] )
					{
						current_data = k[i];
						k[i] = previous_data;
						k[previous_index] = current_data;
						count++;
					}
		
					
				}
			}
			console.log(k);
			/*			
			for(; i < 8; i++)
			{
				z[i] = y[i];
				console.log(z);
			}
			
			k[4] = y[0];
			k[5] = y[1];
			k[6] = y[2];
			k[7] = y[3];
			
			*/		

		</script>
	</body>
</html>