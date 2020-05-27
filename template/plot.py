import matplotlib.pyplot as plt, mpld3
fig = plt.figure()
ax = fig.add_subplot(111)
ax.set_xlabel('x-axis')
ax.set_ylabel('y-axis')
ax.plot([3,1,4,1,5], 'k', mec='w', mew=5, ms=20)
mpld3.save_html(fig,'graph.html')